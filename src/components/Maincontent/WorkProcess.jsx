import React from 'react'
import { FaStethoscope } from 'react-icons/fa'
const WorkProcess = () => {
    return (
        <>
            <div className='workProcessParentDiv'>
                <div className='upperWorkProcess'>
                    <div className='workProcessHeading'>
                        <div className='smallHeadingProcess'><h5>Work Process</h5></div>
                        <div className='bigHeadingProcess'><h3>How It Works?</h3></div>
                    </div>

                    <div className='workProcessPara'>
                        <div className='wpPara'>
                            <p>Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis</p>
                        </div>
                        <div className='buttonAppointment'>
                            <button>MAKE APPOINTMENT</button>
                        </div>
                    </div>
                </div>
                <div className='lowerWorkProcess'>
                    <div className='mainLowerWorkProcess'>
                        <div className='oneLowerWorkDiv'>
                            <div className='lowerWorkDivIcon'>
                                <span className='wpDifferentIcons'> <FaStethoscope /> </span>
                            </div>
                            <div className='lowerWorkDivContent'>
                                <div className='lowerWorkHeading'>
                                    <h4>Search Best Online Professional</h4>
                                </div>
                                <div className='lowerWorkParagraph'>
                                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                                </div>
                                <div className='lowerWorkStep'>
                                    <h4>Step 1</h4>
                                </div>
                                <div className='lowerWorkCircle'></div>
                            </div>
                        </div>
                        <div className='oneLowerWorkDiv secondLowerWorkDiv'>
                            <div className='lowerWorkDivIcon'>
                                <span className='wpDifferentIcons'> <FaStethoscope /> </span>
                            </div>
                            <div className='lowerWorkDivContent'>
                                <div className='lowerWorkHeading'>
                                    <h4>Search Best Online Professional</h4>
                                </div>
                                <div className='lowerWorkParagraph'>
                                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                                </div>
                                <div className='lowerWorkStep'>
                                    <h4>Step 1</h4>
                                </div>
                                <div className='lowerWorkCircle'></div>
                            </div>
                        </div>
                        <div className='oneLowerWorkDiv'>
                            <div className='lowerWorkDivIcon'>
                                <span className='wpDifferentIcons'> <FaStethoscope /> </span>
                            </div>
                            <div className='lowerWorkDivContent'>
                                <div className='lowerWorkHeading'>
                                    <h4>Search Best Online Professional</h4>
                                </div>
                                <div className='lowerWorkParagraph'>
                                    <p>It is a long established fact that a reader will be distracted by the readable</p>
                                </div>
                                <div className='lowerWorkStep'>
                                    <h4>Step 1</h4>
                                </div>
                                <div className='lowerWorkCircle'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkProcess;