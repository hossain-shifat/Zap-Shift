import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/assets'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="space-y-6">
            <div>
                <img className="max-w-full mx-auto" src={assets.customer_top} alt="" />
            </div>
            <div className="text-center">
                <h1 className="font-bold text-2xl py-4">What our customers are sayings</h1>
                <p className="text-gray-700">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, <br className="hidden md:block" /> and strengthen your body with ease!</p>
            </div>
            <Swiper effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper">
                {
                    reviews.map(review => (
                        <SwiperSlide>
                            <div key={review.id} className="border border-base-100 shadow-lg space-y-3 rounded-xl p-4 max-w-[400px] mx-auto bg-white">
                                <div className="text-[#C3DFE2]">
                                    <Quote size={40} fill="#C3DFE2" />
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-600 text-start pb-5 border-b-2 border-dashed">{review.review}</p>
                                    <div className="flex items-center gap-2">
                                        <img src={review.user_photoURL} className="w-12 h-12 rounded-full " />
                                        <div className="text-start">
                                            <h1 className="font-bold text-lg">{review.userName}</h1>
                                            <p>{review.user_email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-center max-w-[350px] mx-auto">
                <button className="swiper-button-prev bg-primary shadow-lg p-3 rounded-full text-black cursor-pointer z-10"><ArrowLeft /></button>
                <div className="custom-pagination flex items-center justify-center"></div>
                <button className="swiper-button-next bg-primary shadow-lg p-3 rounded-full text-black cursor-pointer z-10"><ArrowRight /></button>
            </div>
        </div>
    )
}

export default Review
