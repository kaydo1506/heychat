import { db, auth } from '../firebase/firebase';
import { ref, push, onValue } from 'firebase/database';

import { onAuthStateChanged } from 'firebase/auth';

export const addMessage = (chat) => ({
    type: 'ADD_MESSAGE',
    chat,
});

export const startAddMessage = (messageData = {}) => {
    return (dispatch) => {
        const { messages = '', photoURL = '', uid = '' } = messageData;
        const chat = { messages, photoURL, uid };

        onAuthStateChanged(auth, (user) => {
            const newChatKey = push(ref(db, `users/chatroom`), chat).key;
            if (user) {
                dispatch(
                    addMessage({
                        id: newChatKey,
                        ...chat,
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
        onAuthStateChanged(auth, (user) => {
            onValue(
                ref(db, `users/chatroom`),
                (snapshot) => {
                    const chatroom = [];
                    snapshot.forEach((childSnapshot) => {
                        chatroom.push({
                            id: childSnapshot.key,
                            ...childSnapshot.val(),
                        });
                    });

                    dispatch(setMessage(chatroom));
                },
                {
                    onlyOnce: true,
                }
            );
        });
    };
};

// finish setting up the rules
// set up environment variables
