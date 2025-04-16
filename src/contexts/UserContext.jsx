// UserContext.jsx
import { createContext, useState } from 'react';
import { useAuthentication, useUser } from '../hooks/apiHooks';
import { useNavigate } from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { postLogin } = useAuthentication();
    const { getUserByToken } = useUser();
    const navigate = useNavigate();
    
    // login, logout and autologin functions are here instead of components
    const handleLogin = async (credentials) => {
        try {
            // TODO: post login credentials to API
            // TODO: set token to local storage
            // TODO: set user to state
            // TODO: navigate to home
            const response = await postLogin(credentials);
            localStorage.setItem('token', loginResult.token);
            setUser(loginResult.user);
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };
    
    const handleLogout = () => {
        try {
            // TODO: remove token from local storage
            localStorage.removeItem('token');
            // TODO: set user to null
            setUser(null);
            // TODO: navigate to home
            navigate('/');
        } catch (e) {
            throw new Error(e.message);
        }
    };
    
    // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
    const handleAutoLogin = async () => {
        try {
            // TODO: get token from local storage
            const token = localStorage.getItem('token');
            // TODO: if token exists, get user data from API
            if(token) {
                const userResponse = await getUserByToken(token);
                // TODO: set user to state
                setUser(userResponse.user);
            }
            // TODO: navigate to home
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };
           
    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserProvider, UserContext };