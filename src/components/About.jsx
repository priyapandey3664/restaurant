import React from 'react'
import AboutImg from "../assets/images/about-img"

const About = () => {
  return (
    <>
      <section className='about' id='about'>
        <h1 className='heading'>
            <span>about</span> us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='content'>
            <h3>whats make our food special?</h3>
            <p>My favourite food is a burger. It has many layers of fresh vegetables, sauces and a patty filled between two buns. A burger is a fun dish, and everyone at home enjoys eating it. Many restaurants serve delicious burgers, but I love the one my mother makes at home. </p>
           
            <p> I love the taste of the fresh, crunchy lettuce leaves, the tangy tomatoes and the cheese that melts in the mouth. Burgers are my favourite 4 pm snack, and my mom always makes it as healthy as she can! I love every bite!</p>
            <a href="#" className='btn'>Learn More</a>
        </div>
        </div>
        
      </section>
    </>
  )
}

export default About