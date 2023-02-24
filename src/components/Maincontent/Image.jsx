import React from 'react'
import {FaPlus} from 'react-icons/fa'
const Image = () => {
  return (
    <>
    <section className='imagentext'>
        <div className='contentDiv'>
            <div className='upperHeading'>
                <h4>Markets & Resources</h4>
            </div>
            <div className='middleHeading'>
                <h2>Find The Best</h2>
                <h2>Doctor Near By You.</h2>
            </div>
            <div className='buttons'>
                <button className='buttonBtn btn1'>Find a Doctor <FaPlus className='btnIcon'/></button> 
                <button className='buttonBtn btn2'>Read More <FaPlus className='btnIcon' /></button> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Image
