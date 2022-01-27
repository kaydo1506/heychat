import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import { startAddMessage } from '../actions/messages';

const Chatroom = ({ dispatch, chatroom }) => {
    // const [error] = useState(undefined);
    const { uid, photoURL } = auth.currentUser;
    const [chat, setChat] = useState({ messages: '', photoURL: '', uid: '' });
    const [formValue, setFormValue] = useState('');

    const input = (e) => {
        e.preventDefault();

        setFormValue(e.target.value);
        setChat({ messages: e.target.value, photoURL, uid });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startAddMessage(chat));
        setFormValue('');
    };

    return (
        <>
            <main>
                {chatroom &&
                    chatroom.map((list) => {
                        return <ChatMessage key={list.id} {...list} />;
                    })}
            </main>
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
