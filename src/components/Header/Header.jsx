import React from 'react'
import user from '../../images/user.jpg';
import { FaRegEnvelope, FaLinkedinIn, FaGoogle, FaMapMarkerAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='headerClass'>
                    <div className='address'>
                        <ul className='addressLinks'>
                            <li className='linkStyle'>
                                <a href="mailto:deepakpatel050320@gmail.com">
                                    <FaRegEnvelope className='spaceContent' /> info@website.com</a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <FaMapMarkerAlt className='spaceContent' /> Oakwood, Los Angeles, CA 1098
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='socialIcons'>
                        <div className='soIco'>
                            <ul className='socialUnder'>
                                <li><FaFacebookF className='media'/></li>
                                <li><FaTwitter className='media' /></li>
                                <li><FaLinkedinIn className='media' /></li>
                                <li><FaGoogle className='media' /></li>
                            </ul>
                        </div>
                        <div className='profile'>
                            <img src={user} alt="user" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;