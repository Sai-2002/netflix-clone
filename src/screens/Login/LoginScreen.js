import React, {useState} from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';

function LoginScreen() {
    const [signIn, setsignIn] = useState(false);
    return (
        <div className="LoginScreen">
            <div className="LoginScreen_bg">
                <img className="LoginScreen_logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F2-23236_transparent-netflix-logo-2018-clipart.png&f=1&nofb=1" alt="" srcset="" />
                <div className="LoginScreen_gradient"/>
            </div>

            <div className="LoginScreen_body">
                <SignInScreen/>
            </div>
        </div>
    )
}

export default LoginScreen;

