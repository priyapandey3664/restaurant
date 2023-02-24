import React from 'react'
import { review } from '../Data'
import quoteImg from "../assets/images/quote-img.png"

const Review = () => {
  return (
    <>
    <section className='review' id='review'> 
       <h1 className='heading'>customer's <span>Review</span></h1>
       <div className='box-container'>
         {review.map((item,index)=>(
            <div className='box'>
                <img src={quoteImg} alt=""  className='quote'/>
                <p>
                    Really loved the place
                    Beautiful interiors with great music along with some good food options
                    Also the service here is really quick a special thanks to Mr Jitendra and Deepak for making us so comfortable
                    Coming to food.
                    In desserts phirni is a must have here.
                </p>
                <img src={item.img} alt="" className='user' />
                <h3>john deo</h3>
                <div className='stars'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
            </div>
         ))}
        </div> 
    </section></>
  )
}

export default Review