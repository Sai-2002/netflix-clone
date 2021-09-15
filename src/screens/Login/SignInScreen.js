import React, {useRef} from 'react';
import "./SignInScreen.css";
import {auth} from "../../firebase";

function SignInScreen() {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passRef.current.value
        ).then((authUser) =>{
            console.log(authUser);
        }).catch((error) =>{
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value, 
            passRef.current.value 
        ).then((authUser) =>{
            console.log(authUser);
        }).catch((error) =>{
            alert(error.message);
        });
    };

    return (
        <div className="signinScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email Address"/>
                <input ref={passRef} type="password" placeholder="Password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signinScreen_gray">New to Netflix?</span> <span className="signUp_link" onClick={register}>Sign Up now.</span> </h4>
            </form>
        </div>
    )
}

export default SignInScreen;
