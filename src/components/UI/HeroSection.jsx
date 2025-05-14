import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className='hero-section main'>
          <div className="container grid grid-two-cols">
            <div className='hero-content'>
              <h1 className='heading-xl'>
                Explore the World , One Country at a Time.
              </h1>
              <p className='paragraph'>
                Discover the history, Culture, and beauty of every nation. Sort, Search, and Filter through countries to find te details you need.
              </p>
              <button className='btn btn-darken btn-inline bg-white-box'>
                Start Exploring <FaLongArrowAltRight />
              </button>
            </div>
            <div className='hero-image'>
              <img src="https://media.licdn.com/dms/image/v2/C561BAQG0RRqJHrUDZw/company-background_10000/company-background_10000/0/1583943356453/world_atlas_cover?e=2147483647&v=beta&t=qtf5cOuqjdIINDcTz4-MlK0xHnwTSxKjYNCC5Ot-tvI" alt="image" className='banner-image' />
            </div>
          </div>
        </main>
  );
};

export default HeroSection
