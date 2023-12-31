import React from 'react';
import "../styles/Sidebar.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Sidebar() {

    const user = useSelector(selectUser);


    const recentItem = (topic) => {

    return (<div className="sidebar__recentItem">
      <span className="sidebar__hash"><strong>#</strong></span>
      <p>{topic}</p>
    </div>)

  }


  return (
    <div className='sidebar'>

      <div className="sidebar__top">
        <img src="https://media.licdn.com/dms/image/C4E12AQH7C4CgOZ81hg/article-cover_image-shrink_600_2000/0/1520134478755?e=2147483647&v=beta&t=PIzPym48v_v1z_kjiPx3etQ741bV-UM3kNou0ZDfQvY" alt="BackGroundPic" />
        <Avatar className="sidebar__avatar" src={user.photoURL}>{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">

        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,573</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className='sidebar__statNumber'>8,973</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('Made')}
        {recentItem("With")}
        {recentItem("React.js")}
        {recentItem("And Firebase!")}
      </div>


    </div>
  )
}
export default Sidebar
