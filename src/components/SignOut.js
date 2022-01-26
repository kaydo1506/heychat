import React from 'react';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOut = () => {
    return (
        auth.currentUser && (
            <button className='sign-out' onClick={() => signOut(auth)}>
                <FontAwesomeIcon className='sign-out--icon' icon={faSignOutAlt} />
            </button>
        )
    );
};

export default SignOut;
