import React from 'react'
import image from '../../images/Article.jpg'
import { FaRegUser, FaRegFolderOpen } from 'react-icons/fa'
const Articles = () => {
    return (
        <>
            <div className='mainArticleDiv'>
                <div className='articleHeading'>
                    <div className='articleSmallHeading'>
                        <h4>Latest News</h4>
                    </div>
                    <div className='articleBigHeading'>
                        <h3>Our Insights & Articles</h3>
                    </div>
                </div>
                <div className='articleCard'>
                    <div className='mainArticleCard'>

                        <div className='secondLevelCard'>

                            <div className='underArticleCard'>
                                <div className='articleImage'>

                                    <div className='firstImageClass'>
                                        <img src={image} alt="Article Image" />
                                    </div>

                                    <div className='dateDiv'><p>28 JANUARY, 2022</p>
                                    </div>

                                </div>
                                <div className='lowerArticleDiv'>
                                    <div className='iconsArticleDiv'>
                                        <div className='userIcon'>
                                            <span> <FaRegUser /> </span><p>By Jean</p>
                                        </div>
                                        <div className=' userIcon folderIcon'>
                                            <span> <FaRegFolderOpen /> </span><p>Medical</p>
                                        </div>
                                    </div>
                                    <div className='cardArticleHeading'>
                                        <h5>Having Overweight and depression can</h5>
                                    </div>
                                    <div className='cardArticleReadMore'>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='secondLevelCard'>

                            <div className='underArticleCard'>
                                <div className='articleImage'>

                                    <div className='firstImageClass'>
                                        <img src={image} alt="Article Image" />
                                    </div>

                                    <div className='dateDiv'><p>28 JANUARY, 2022</p>
                                    </div>

                                </div>
                                <div className='lowerArticleDiv'>
                                    <div className='iconsArticleDiv'>
                                        <div className='userIcon'>
                                            <span> <FaRegUser /> </span><p>By Jean</p>
                                        </div>
                                        <div className=' userIcon folderIcon'>
                                            <span> <FaRegFolderOpen /> </span><p>Medical</p>
                                        </div>
                                    </div>
                                    <div className='cardArticleHeading'>
                                        <h5>Having Overweight and depression can</h5>
                                    </div>
                                    <div className='cardArticleReadMore'>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='secondLevelCard'>

                            <div className='underArticleCard'>
                                <div className='articleImage'>

                                    <div className='firstImageClass'>
                                        <img src={image} alt="Article Image" />
                                    </div>

                                    <div className='dateDiv'><p>28 JANUARY, 2022</p>
                                    </div>

                                </div>
                                <div className='lowerArticleDiv'>
                                    <div className='iconsArticleDiv'>
                                        <div className='userIcon'>
                                            <span> <FaRegUser /> </span><p>By Jean</p>
                                        </div>
                                        <div className=' userIcon folderIcon'>
                                            <span> <FaRegFolderOpen /> </span><p>Medical</p>
                                        </div>
                                    </div>
                                    <div className='cardArticleHeading'>
                                        <h5>Having Overweight and depression can</h5>
                                    </div>
                                    <div className='cardArticleReadMore'>
                                        <p>Read More</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles