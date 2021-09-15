import React from 'react';
import "./ProfileScreen.css";
import Nav from "../homescreen/Nav";
import PlanScreen from './PlanScreen';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import {auth} from '../../firebase';

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className="ProfileScreen">
            <Nav/>
            <div className="ProfileScreen_body">
                <h1>Edit Profile</h1>
                <div className="ProfileScreen_info">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XQ-com-ULw7aaf_U3BcQ3AHaHa%26pid%3DApi&f=1" alt="" />
                    <div className="ProfileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="ProfileScreen_plans">
                            <h3>Plans</h3>
                            <PlanScreen/>
                            <button onClick={()=> auth.signOut()}
                            className="ProfileScreen_SignOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
