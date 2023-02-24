import React from 'react'
import { FaSearch } from 'react-icons/fa'
const Content = () => {
  return (
    <>
    <div className='downContentDiv'>
        <div className='contentCetnralDiv'>
            <div className='leftDiv'>
                <div className='leftHeading'>
                    <h3>Search Topic</h3>
                </div>
                <div className='leftInput'>
                          <input type="text" placeholder='Search doctors, clinic, Hospitals etc.' /> <FaSearch className='searchIcon'/>
                </div>
            </div>
            <div className='rightDiv'>
                <div className='rightHeading'>
                          <h3>Location</h3>
                </div>
                <div className='rightInput'>
                    <input type="text" placeholder='Location'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Content