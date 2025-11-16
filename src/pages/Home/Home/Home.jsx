import React from 'react'
import Banner from '../Banner/Banner'
import HowItWorks from '../HowitWorks/HowItWorks'
import OurServices from '../OurServices/OurServices'

const Home = () => {
    return (
        <div className="mx-2 max-w-[1200px] space-y-10 md:mx-auto">
            <Banner/>
            <HowItWorks/>
            <OurServices/>
        </div>
    )
}

export default Home
