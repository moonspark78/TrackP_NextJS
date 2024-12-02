"use client";

import React from 'react'
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';
import Carousel from "react-multi-carousel";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fcf6fa]'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
            What client say about us
        </h1>
        <div className='mt-20 w-[90%] md:w-[80%] mx-auto'>
            <Carousel
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={1520}
                infinite
                responsive={responsive}
                showDots
            >
                <ReviewCard name="Jessy Doe" image="/images/c1.png"/>
                <ReviewCard name="Rolla tar" image="/images/c2.png"/>
                <ReviewCard name="Elise Tein" image="/images/c1.png"/>
                <ReviewCard name="Alain Roeoe" image="/images/c2.png"/>
            </Carousel>
        </div>
    </div>
  )
}

export default Review