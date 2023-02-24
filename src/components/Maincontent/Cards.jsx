import React from 'react'
import { FaStethoscope, FaCapsules, FaBriefcase, FaBed, FaArrowRight } from 'react-icons/fa'
const Cards = () => {
  return (
    <>
      <div className='cardsDiv'>
        <div className='card'>
          <div className='cardIcons'><FaStethoscope /></div>
          <div className='cardData'>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.</p>
          </div>
          <div className='rightArrow'>
            <span class="arrow"><FaArrowRight /></span>
            <span class="text">Read More</span>
          </div>

        </div>
        <div className='card'>
          <div className='cardIcons'>< FaBed /></div>
          <div className='cardData'>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.</p>
          </div>
          <div className='rightArrow'>
            <span class="arrow"><FaArrowRight /></span>
            <span class="text">Read More</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardIcons'><FaCapsules /></div>
          <div className='cardData'>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.</p>
          </div>
          <div className='rightArrow'>
            <span class="arrow"><FaArrowRight /></span>
            <span class="text">Read More</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardIcons'><FaBriefcase /></div>
          <div className='cardData'>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.</p>
          </div>
          <div className='rightArrow'>
            <span class="arrow"><FaArrowRight /></span>
            <span class="text">Read More</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards