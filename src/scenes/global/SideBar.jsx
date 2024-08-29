import React from 'react'
import './Side.css'
import { SideData } from './SideData.js'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='Sidebar'>
      <div className="logo">
        <div className="logo-icon">A</div>
        <div className="logo-text">Akademi</div>
      </div>
      <ul className='SideBarList'>
        {SideData.map((val, key) =>{
          return(
            <Link to={val.link} key={key} className='row' style={{textDecoration:"none"}}>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </Link>
          ) 
        })}
      </ul>
      <div className="footer">
        <p>Akademi - School Admission Dashboard</p>
        <p>Made with ❤️ by Peterdraw</p>
      </div>
    </div>
  )
}

export default SideBar;
