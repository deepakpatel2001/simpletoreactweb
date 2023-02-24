import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../images/sticky.png'

const ClientSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
     <div className='mainClientDiv container-fluid'>
        <div className='upperClientDiv row'>
          <div className='upperClientUpperHeading col'>
            <h5>Client Testimonials</h5>
          </div>
          <div className='upperClientLowerHeading col'>
            <h3>What Our Client Say</h3>
          </div>
        </div>
        <div className='lowerClientDiv'>
          <Slider {...settings} className="sliderMainDiv">
            <div className='slick-slide'>
              <div className='stickyParentDiv'>
                <div className='upperImgWithQoute'>
                  <img src={image} alt="sticky profile image" />
                </div>
                <div className='paragraphWithQoute'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi repellendus earum cum?</p>
                </div>
                <div className='nameWithSurname'>
                  <div className='upperStickyHeading'>
                    <h4>Kelly Colemon</h4>
                  </div>
                  <div className='upperStickyParagraph'>
                    <p>Chairman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='slick-slide'>
              <div className='stickyParentDiv'>
                <div className='upperImgWithQoute'>
                  <img src={image} alt="sticky profile image" />
                </div>
                <div className='paragraphWithQoute'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi repellendus earum cum?</p>
                </div>
                <div className='nameWithSurname'>
                  <div className='upperStickyHeading'>
                    <h4>John Doe</h4>
                  </div>
                  <div className='upperStickyParagraph'>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='slick-slide'>
              <div className='stickyParentDiv'>
                <div className='upperImgWithQoute'>
                  <img src={image} alt="sticky profile image" />
                </div>
                <div className='paragraphWithQoute'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi repellendus earum cum?</p>
                </div>
                <div className='nameWithSurname'>
                  <div className='upperStickyHeading'>
                    <h4>John Doe</h4>
                  </div>
                  <div className='upperStickyParagraph'>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='slick-slide'>
              <div className='stickyParentDiv'>
                <div className='upperImgWithQoute'>
                  <img src={image} alt="sticky profile image" />
                </div>
                <div className='paragraphWithQoute'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi repellendus earum cum?</p>
                </div>
                <div className='nameWithSurname'>
                  <div className='upperStickyHeading'>
                    <h4>John Doe</h4>
                  </div>
                  <div className='upperStickyParagraph'>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='slick-slide'>
              <div className='stickyParentDiv'>
                <div className='upperImgWithQoute'>
                  <img src={image} alt="sticky profile image" />
                </div>
                <div className='paragraphWithQoute'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi repellendus earum cum?</p>
                </div>
                <div className='nameWithSurname'>
                  <div className='upperStickyHeading'>
                    <h4>Jane Doe</h4>
                  </div>
                  <div className='upperStickyParagraph'>
                    <p>CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
    </div> 
    </>
  )
}

export default ClientSection;