import React from "react";
import "../styles/Sidebar.css";
import SidebarChannel from "../components/SidebarChannel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';


function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <h3>Chicho</h3> 
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h3>Channels</h3>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className="sidebar__signalIcon"
                    fontSize="large" 
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Conected</h3>
                    <p>stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <PhoneIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_2BMk_I9w3EHjVs3sV524pOdrFu0NFKg5xvhFE=s32-c-mo"/>
                <div className="sidebar__profileInfo">
                    <h3>@Jordi</h3>
                    <p>#jordicantogalvez</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar
