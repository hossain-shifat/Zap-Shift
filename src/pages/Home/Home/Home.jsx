import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowitWorks/HowItWorks'
import OurServices from '../OurServices/OurServices'
import Brands from '../Brands/Brands'
import Review from '../Review/review'

const Home = () => {
    return (
        <div className="mx-2 max-w-[1200px] space-y-10 md:mx-auto">
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
            <Review/>
        </div>
    )
}

export default Home
