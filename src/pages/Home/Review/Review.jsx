import React from 'react'
import { assets } from '../../../assets/assets'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Quote } from 'lucide-react';

const Review = () => {
    return (
        <div className="space-y-6">
            <div>
                <img className="max-w-full mx-auto" src={assets.customer_top} alt="" />
            </div>
            <div className="text-center">
                <h1 className="font-bold text-2xl py-4">What our customers are sayings</h1>
                <p className="text-gray-700">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, <br className="hidden md:block"/> and strengthen your body with ease!</p>
            </div>
            <div className="">
                <Carousel autoPlay={true} infiniteLoop={true} labels={false} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} centerSlidePercentage={80} dynamicHeight={true} thumbWidth={100} className="">
                    <div className="border border-base-100 shadow-lg space-y-3 rounded-xl p-4 max-w-[400px] mx-auto bg-white">
                        <div className="text-[#C3DFE2]">
                            <Quote size={40} fill="#C3DFE2" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-600 text-start pb-5 border-b-2 border-dashed">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
                            <div className="flex items-center gap-2">
                                <p className="w-12 h-12 bg-[#03464D] rounded-full "></p>
                                <div className="text-start">
                                    <h1 className="font-bold text-lg">Awlad Hossin</h1>
                                    <p>Senior Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-base-100 shadow-lg space-y-3 rounded-xl p-4 max-w-[400px] mx-auto bg-white">
                        <div className="text-[#C3DFE2]">
                            <Quote size={40} fill="#C3DFE2" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-600 text-start pb-5 border-b-2 border-dashed">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
                            <div className="flex items-center gap-2">
                                <p className="w-12 h-12 bg-[#03464D] rounded-full "></p>
                                <div className="text-start">
                                    <h1 className="font-bold text-lg">Nasir Uddin</h1>
                                    <p>SEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-base-100 shadow-lg space-y-3 rounded-xl p-4 max-w-[400px] mx-auto bg-white">
                        <div className="text-[#C3DFE2]">
                            <Quote size={40} fill="#C3DFE2" />
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-600 text-start pb-5 border-b-2 border-dashed">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p>
                            <div className="flex items-center gap-2">
                                <p className="w-12 h-12 bg-[#03464D] rounded-full "></p>
                                <div className="text-start">
                                    <h1 className="font-bold text-lg">Rasel Ahamed</h1>
                                    <p>STO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Review
