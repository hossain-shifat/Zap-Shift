import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { assets } from '../../../assets/assets'


const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} labels={false} className="max-w-[1200px] mx-auto">
            <div>
                <img src={assets.banner1} />
            </div>
            <div>
                <img src={assets.banner2} />
            </div>
            <div>
                <img src={assets.banner3} />
            </div>
        </Carousel>
    )
}

export default Banner
