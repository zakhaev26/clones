import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { HeaderOptions } from "./HeaderOptions";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Header (){
    return(
        <div className='header'>

            <div className="header__left">
                <img src="https://www.svgrepo.com/show/354000/linkedin-icon.svg" alt="" />
            </div>

            <div className="header__search">
            <SearchIcon />
                <input type="text" name="" id="" />
            </div>


            <div className="header__right">
                <HeaderOptions Icon = {HomeIcon} title= 'Home' />
                
                <HeaderOptions Icon = {SupervisorAccountIcon} title= 'My Network' /> 
                <HeaderOptions Icon = {BusinessCenterIcon} title= 'Jobs' /> 
                <HeaderOptions Icon = {MapsUgcIcon} title= 'Messaging' /> 
                <HeaderOptions Icon = {NotificationsNoneIcon} title= 'Notifications' /> 
            </div>
   
        </div>
    )
}