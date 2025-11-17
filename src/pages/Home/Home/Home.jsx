import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowitWorks/HowItWorks'
import OurServices from '../OurServices/OurServices'
import Brands from '../Brands/Brands'
import Review from '../Review/review'
import FAQ from '../FAQ/FAQ'

const Home = () => {
    return (
        <div className="mx-2 max-w-[1200px] space-y-10 md:mx-auto">
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
            <Review/>
            <FAQ/>
        </div>
    )
}

export default Home
