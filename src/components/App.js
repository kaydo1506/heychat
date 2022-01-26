import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import { auth } from '../firebase/firebase';

const App = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='box-layout'>
            <header className='header'>
                <h1>💬</h1>
                <SignOut />
            </header>

            <section>
                {loading && <p className='sign-in--text'>Initializing User...</p>}
                {error && <p>error: {error}</p>}
                {user ? <ChatRoom /> : <SignIn />}
            </section>
        </div>
    );
};

export default App;
