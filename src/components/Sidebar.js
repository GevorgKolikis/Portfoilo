import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import mightycoder from '../assets/MyPhoto.jpg'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:gevorg3035@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar-avatar" />
            <div className="sidebar-name">Gevorg <span>Kolikisayan</span> </div>
            <div className="sidebar-item sidebar-title">Web Developer</div>
            <figure className="sidebar-social-icons mt-3">
                <a href=""><img src={facebook} alt="facebook" className="sidebar-icon mx-2" /></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar-icon mx-2" /></a>
            </figure>
            <div className="sidebar-contact">
                <div className="sidebar-item sidebar-github">
                    <a href=""><img src={github} alt="github" className="sidebar-icon mr-3" />github</a>
                </div>
                <div className="sidebar-location">
                    <img src={pin} alt="location" className="sidebar-icon mr-3" />
                    Ejmiadzin, Armenia</div>
                <div className="sidebar-item">Gevorg3035@gmail.com</div>
                <div className="sidebar-item">Spandaryan xx</div>
            </div>
            <div className="sidebar-item sidebar-email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;