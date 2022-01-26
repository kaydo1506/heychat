import { db, auth } from '../firebase/firebase';
import { ref, push, onValue } from 'firebase/database';

import { onAuthStateChanged } from 'firebase/auth';

export const addMessage = (chatMessages) => ({
    type: 'ADD_MESSAGE',
    chatMessages,
});

export const startAddMessage = (messageData = {}) => {
    return (dispatch) => {
        const { messages = '', photoURL = '' } = messageData;
        const chatMessages = { messages, photoURL };

        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const newChatKey = push(ref(db, `users/${uid}/chatroom`), chatMessages).key;
            if (user) {
                dispatch(
                    addMessage({
                        id: newChatKey,
                        ...chatMessages,
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
        const uid = auth.currentUser.uid;
        onValue(ref(db, `users/${uid}/chatroom`), (snapshot) => {
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
