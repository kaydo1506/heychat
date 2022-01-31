import React from 'react';
import { auth, provider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <div className='sign-in'>
            <FontAwesomeIcon className='sign-in--icon' icon={faUserCircle} />
            <button className='sign-in--btn' onClick={signInWithGoogle}>
                <span>Sign in with Google</span>
            </button>
            <p className='sign-in--text'>Don't spam! </p>
            <p className='sign-in--text'>Don't share sensitive information! </p>
        </div>
    );
};

export default SignIn;
