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
            <p className='sign-in--text'>Do not violate the community guidelines or you will be banned for life!</p>
        </div>
    );
};

export default SignIn;
