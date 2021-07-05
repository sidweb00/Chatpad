/*user context for managing all users information*/
// getting all the hooks

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

// function for exporting the entire context    
export const useAuth = () => useContext(AuthContext);

// react chlidren render all the jsx that is passed in authProvider
export const AuthProvider = ({ children }) => {
    //loding State
    //at start loding state is set to true
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    //for renavigating
    const history = useHistory();

    //when things in the dependency array change then the callback function is recalled
    // whne renavigate or add user
    useEffect(() => {
        // grabing the user from the firebase authentication setting it to state
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) history.push('/chats');
        })
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}