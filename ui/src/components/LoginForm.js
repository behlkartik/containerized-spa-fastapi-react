import {useState} from 'react';
import fetchUserTokenFromBackend from '../utils/LoginUtils';

const LoginForm = () => {
    const [userToken, setUserToken] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.username.value, e.target.password.value);
        const userToken = await fetchUserTokenFromBackend({username: e.target.username.value, password: e.target.password.value});
        if (userToken){
            console.log("User token", userToken);
            setUserToken(userToken);
        } else {
            setUserToken("Unable to Login. username/password incorrect");
        }
        
    }
    return !userToken ? (
        <form className='LoginForm' onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </form>
    ) : (
        <h4>User Token: {userToken}</h4>
    )
}

export {LoginForm};