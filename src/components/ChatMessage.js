import React from 'react';
import { auth } from '../firebase/firebase';

const ChatMessage = ({ messages, photoURL, uid, displayName }) => {
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    // console.log(displayName);
    return (
        <>
            <div className={`displayName ${messageClass}`}>
                <span>{displayName}</span>
            </div>
            <div className={`chatMessage ${messageClass}`}>
                <img
                    className='chatMessage-img'
                    alt=''
                    src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
                />
                <p className='chatMessage-text'> {messages}</p>
            </div>
        </>
    );
};

export default ChatMessage;
