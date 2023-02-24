import React from 'react'
import image from '../../images/services.jpg'
import { FaArrowRight } from "react-icons/fa"
const Services = () => {
    return (
        <>
            <div className='servicesDiv'>
                <div className='servicesUpperDiv'>
                    <div className='underServicesHeading'>
                        <h4>What We do</h4>
                    </div>
                    <div className='subServicesHeading'>
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className='servicesImage'>
                    <div className='servicesImageDiv'>
                        <div className='serImg'>
                            <img src={image} alt="services image" />
                        </div>
                        <div className='serDescription'>
                            <div className='mainSerDescription'>
                                <h4>General Checkup</h4>
                            </div>
                            <div className='serDummyPara'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus odio, veritatis tenetur provident doloremque.</p>
                            </div>
                            <div className='serReadMore'>
                                <h4>Read More <span className='serReadMoreIcon'> <FaArrowRight /> </span> </h4>
                                
                            </div>
                        </div>
                    </div>
                    <div className='servicesImageDiv'>
                        <div className='serImg'>
                            <img src={image} alt="services image" />
                        </div>
                        <div className='serDescription'>
                            <div className='mainSerDescription'>
                                <h4>General Checkup</h4>
                            </div>
                            <div className='serDummyPara'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus odio, veritatis tenetur provident doloremque.</p>
                            </div>
                            <div className='serReadMore'>
                                <h4>Read More <span className='serReadMoreIcon'> <FaArrowRight /> </span> </h4>

                            </div>
                        </div>
                    </div>
                    <div className='servicesImageDiv'>
                        <div className='serImg'>
                            <img src={image} alt="services image" />
                        </div>
                        <div className='serDescription'>
                            <div className='mainSerDescription'>
                                <h4>General Checkup</h4>
                            </div>
                            <div className='serDummyPara'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloribus odio, veritatis tenetur provident doloremque.</p>
                            </div>
                            <div className='serReadMore'>
                                <h4>Read More <span className='serReadMoreIcon'> <FaArrowRight /> </span> </h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
