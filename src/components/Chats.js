import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import {useNavigate} from "react-router-dom"

import { auth } from '../FirebaseConfig';
import axios from 'axios';
import { ChatEngine } from 'react-chat-engine';

const Chats = () => {
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File( [data], "user-photo.jpg", { type: 'image/jpeg' } )
    }

    const handleLogOut = async () => {
        await auth.signOut();
        navigate(`/`)
    }


    useEffect( () => {
        if(!user){
            navigate(`/`);
            return;
        }
        axios.get( 'https://api.chatengine.io/users/me', {
            headers: {
                "project-id" : process.env.REACT_APP_CHAT_ENGINE_ID,
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        } ).then( () => {
            setLoading(false);
        } ).catch( () => {
            let formDeta = new FormData();
            formDeta.append('email', user.email);
            formDeta.append('username', user.email);
            formDeta.append('secret', user.uid);
            getFile(user.photoURL).then( (avatar) => {
                formDeta.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users', formDeta, {
                    headers: { 
                        'private-key' : process.env.REACT_APP_CHAT_ENGINE_KEY
                    }
                }).then( () => setLoading(false) )
                .catch( (err) => console.log(err) );
            } )
        } )

        
    }, [user, navigate] );

    if(!user || loading){
        return 'Loading';
    }

    return (
        <div className="chart-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    <span>ChatBox</span>
                </div>
                <button className="logout-tab" onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
            <ChatEngine 
                height="calc(100vh - 85px)"
                projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;