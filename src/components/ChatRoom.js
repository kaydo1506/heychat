import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import { startAddMessage, startSetMessages } from '../actions/messages';
import { onAuthStateChanged } from 'firebase/auth';

const Chatroom = ({ dispatch, chatroom }) => {
    // const [error] = useState(undefined);
    const { photoURL } = auth.currentUser;
    const [chat, setChat] = useState({ messages: '', photoURL: '' });
    const [formValue, setFormValue] = useState('');

    const input = (e) => {
        e.preventDefault();
        let text = e.target.value;
        setFormValue(text);
        setChat({ messages: text, photoURL });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startAddMessage(chat));
        setFormValue('');
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(startSetMessages());
            }
        });
    }, [dispatch]);
    console.log(chatroom);

    return (
        <>
            <div className='chatroom'>
                {chatroom &&
                    chatroom.map((list) => {
                        return <ChatMessage key={list.id} {...list} />;
                    })}
            </div>
            <form className='form' onSubmit={onSubmit}>
                <input value={formValue} className='form--input' placeholder='say something nice' onChange={input} />
                <button disabled={!formValue} className='form--btn'>
                    send
                </button>
            </form>
        </>
    );
};

const mapStateToProps = (state) => {
    return { chatroom: state };
};
export default connect(mapStateToProps)(Chatroom);

/* Tommorrow Ify pls Render the chatmessages on the screen, that should be the final thing */
/* Goodluck */
// God be with you
// I'm proud of you keep going
