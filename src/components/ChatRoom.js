import React, { useState, useEffect, useRef } from 'react';
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';
import { startAddMessage, startSetMessages } from '../actions/messages';

const Chatroom = ({ dispatch, chatroom }) => {
    const dummy = useRef();
    const { uid, photoURL, displayName } = auth.currentUser;
    const [chat, setChat] = useState({ messages: '', photoURL: '', uid: '', displayName: '' });
    const [formValue, setFormValue] = useState('');

    const input = (e) => {
        e.preventDefault();

        setFormValue(e.target.value);
        setChat({ messages: e.target.value, photoURL, uid, displayName });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startAddMessage(chat));
        setFormValue('');
    };

    useEffect(() => {
        dispatch(startSetMessages());
    }, [dispatch, chatroom]);

    useEffect(() => {
        setTimeout(() => {
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }, 2500);
    }, [formValue]);

    return (
        <>
            <main>
                {chatroom &&
                    chatroom.map((list) => {
                        return <ChatMessage key={list.id} {...list} />;
                    })}
                <span ref={dummy}></span>
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
