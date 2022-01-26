import { db, auth } from '../firebase/firebase';
import { ref, push, onValue } from 'firebase/database';

import { onAuthStateChanged } from 'firebase/auth';

export const addMessage = (chatMessage) => ({
    type: 'ADD_MESSAGE',
    chatMessage,
});

export const startAddMessage = (messageData = {}) => {
    return (dispatch) => {
        const { messages = '', photoURL = '' } = messageData;
        const chatMessage = { messages, photoURL };

        onAuthStateChanged(auth, (user) => {
            const newChatKey = push(ref(db, `users/chatroom`), chatMessage).key;
            if (user) {
                dispatch(
                    addMessage({
                        id: newChatKey,
                        ...chatMessage,
                    })
                );
            }
        });
    };
};

export const setMessage = (chatMessages) => ({
    type: 'SET_MESSAGES',
    chatMessages,
});
export const startSetMessages = () => {
    return (dispatch) => {
        onValue(ref(db, `users/chatroom`), (snapshot) => {
            const chatroom = [];
            snapshot.forEach((childSnapshot) => {
                chatroom.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });

            dispatch(setMessage(chatroom));
        });
    };
};
