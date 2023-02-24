import React from 'react'
import { FaSearch, FaShoppingBasket, FaRegHeart, FaArrowRight } from 'react-icons/fa'
import logo from '../../images/logo-light.png'

const Imagentext = () => {
    return (
        <>
            <nav>
                <div className='imgTextContainer'>
                    <div className='logo'>
                        <a href=""><img src={logo} alt="Logo" /></a>
                    </div>
                    <div className='centerData'>
                        <ul className='cenDtaList'>
                            <li>
                                Home
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>

                            <li>Blog
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                            <li>Pages
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                            <li>Clinics
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                            <li>Doctors
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                            <li>Shop
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                            <li>Contact Us
                                <ul className='subMenu visible'>
                                    <li>New</li>
                                    <hr />
                                    <li>World</li>
                                    <hr />
                                    <li>Var</li>
                                    <hr />
                                    <li>People</li>
                                    <hr />
                                    <li>University</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='endData'>
                        <div className='cartSection'>
                            <ul className='underCartList'>
                                <li title='Your Cart'> <FaSearch />  </li>
                                <li title='Your Cart'> <FaShoppingBasket /> </li>
                                <li title='Your Cart'> <FaRegHeart /> </li>
                            </ul>
                        </div>
                        <div className='mainButton'>
                            <button>Get a Quote <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Imagentext