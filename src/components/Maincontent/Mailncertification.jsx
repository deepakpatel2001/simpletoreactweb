import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import image from "../../images/certificate.png"
const Mailncertification = () => {
    return (
        <>
            <div className='mainMailDiv'>
                <div className='leftSideMail'>
                    <div className='upperIconWithMail'>
                        <div className='upperIcon'><span> <BiMessageAltDetail /> </span></div>
                        <div className='upperContentData'>
                            <h2>Subscribe Our Email</h2>
                            <h2>For Newsletter</h2>
                        </div>
                    </div>
                    <div className='centerMailContent'>
                        <div className='dummPara'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque minima magni optio quam sapiente?</p>
                        </div>
                    </div>
                    <div className='inputMailButton'>
                        <div className='inputBoxMail'>
                            <input type="text" placeholder='Email Address' />
                        </div>
                        <div className='buttonWithMessageIcon'>
                            <button>
                                <div className='messageMailIcon'><span className='mesIcon'> <BiMessageAltDetail /> </span></div>
                                <div className='subscribeHeading'><h4>Subscribe</h4></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='rightSideMail'>
                    <div className='mainRightSideDiv'>
                        <div className='upperTwoDiv'>
                            <div className='oneDiv'>
                                <img src={image} alt="certificate image" />
                            </div>
                            <div className='secondDiv'>
                                <img src={image} alt="certificate image" />
                            </div>
                        </div>
                        <div className='lowerTwoDiv'>
                            <div className='oneDiv'>
                                <img src={image} alt="certificate image" />
                            </div>
                            <div className='secondDiv'>
                                <img src={image} alt="certificate image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mailncertification;