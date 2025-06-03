import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/icons'
const Sidebar = () => {
    const [extended,setExtended] = useState(true)
  return (
    <div className='Sidebar'>
        <div className="top">
            <div onClick={()=>setExtended(prev=>!prev)} className="menu">
                <assets.FiMenu/>
            </div>
            <div className="new-chat">
                <assets.FaPlus/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className="recent">
                <p className='recent-title'>Recent</p>
                <div className="recent-entry">
                    <assets.FaRegMessage size={15}/>
                    <p>What is React ...</p>
                </div>
            </div>
            : null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <assets.CiCircleQuestion size={20}/>
                {extended?<p>Help</p>:null} 
            </div>
            <div className="bottom-item recent-entry">
                <assets.MdHistory size={20}/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <assets.CiSettings size={20}/>
                {extended?<p>Settings</p>:null}
            </div>

        </div>
    </div>
  )
}

export default Sidebar