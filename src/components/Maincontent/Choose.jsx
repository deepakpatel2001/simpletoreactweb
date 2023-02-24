import React from 'react'
import { FaRegHeart, FaPeopleCarry } from 'react-icons/fa'
import image1 from '../../images/imagewithpeopleandheart/280.jpg'
import image2 from '../../images/imagewithpeopleandheart/370x250.jpg'
const Choose = () => {
  return (
    <div className='superChooseDiv'>
        <div className='chooseMainDiv'>
          <div className='contentWithImages'>
            <div className='leftContentDiv'>
              <div className='leftUpperContentDivHeading'>
                <h2>Why Choose</h2>
                <h2>Docfind Clicnic?</h2>
              </div>
              <div className='dummyPara'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, delectus!</p>
              </div>
              <div className='paraWithIcons'>
                <div className='heartnPeople'>
                  <div className='heartIcons'>
                    <div className='iconsheart'> < FaRegHeart />
                    </div>
                    <div className='iconsDescription'><h4>Quality Control System</h4>
                      <p>it is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                  <div className='heartIcons peopleIcons'>
                    <div className='iconsheart peoples'> < FaPeopleCarry />
                    </div>
                    <div className='iconsDescription'><h4>Highly Professional Staff</h4>
                      <p>it is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='rightContentDiv'>
              <div className='allImages'>
                <div className='firstImage'>
                  <img src={image1} alt="Upper Doctor Image" />
                </div>
                <div className='secondImage'>
                  <img src={image2} alt="Lower Doctor Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='countDownArea'>
          <div className='mainCountDownDiv'>
            <div className='underCountDiv'>
              <div className='countHeading'><h4>340+</h4></div>
              <div className='countPara'><p>Customers</p></div>
            </div>
            <div className='underCountDiv'>
              <div className='countHeading'><h4>120+</h4></div>
              <div className='countPara'><p>Years of Experience</p></div>
            </div>
            <div className='underCountDiv'>
              <div className='countHeading'><h4>120+</h4></div>
              <div className='countPara'><p>Awesome Team</p></div>
            </div>
            <div className='underCountDiv'>
              <div className='countHeading'><h4>80+</h4></div>
              <div className='countPara'><p>Customers</p></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Choose;