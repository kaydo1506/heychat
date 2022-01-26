import React from 'react';

const ChatMessage = ({ messages, photoURL, id }) => {
    return (
        <div className='chatMessage'>
            <img
                className='chatMessage-img'
                alt=''
                src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
            />

            <p className='chatMessage-text'> {messages}</p>
        </div>
    );
};

export default ChatMessage;
