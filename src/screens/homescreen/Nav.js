import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[]);
    
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img 
                onClick = {() => history.push("/")}
                className='nav_logo' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F2-23236_transparent-netflix-logo-2018-clipart.png&f=1&nofb=1" alt="" />
                <img 
                onClick = {() => history.push("/profile")} 
                className='nav_profile' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XQ-com-ULw7aaf_U3BcQ3AHaHa%26pid%3DApi&f=1" alt="" />
            </div>
        </div>
    );
}

export default Nav;