import React from 'react'
import './Main.css'
import { assets } from '../../assets/icons'
import { user } from '../../assets/assets'
const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={user.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, santhosh.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                        <assets.FaRegCompass className='a' size={35}/>
                    </div>

                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing ?</p>
                        <assets.FaRegMessage className='a' size={35} />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing e</p>
                        <assets.FaCode className='a' size={35} />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing el</p>
                        <assets.FaLightbulb className='a' size={35} />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div className="icon">
                            <assets.RiGalleryUploadFill className='b' size={25}/>
                            <assets.CiMicrophoneOn className='b' size={25}/>
                            <assets.IoSendSharp className='b' size={25}/>
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main