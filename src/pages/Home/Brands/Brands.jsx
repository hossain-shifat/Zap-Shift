import React from 'react'
import { assets } from '../../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';

const Brands = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-10 border-b-2 border-dashed pb-10">
                <div className="font-bold text-2xl text-center">
                    <h1>We've helped thousands of sales teams</h1>
                </div>
                <Swiper spaceBetween={10} slidesPerView={4} centeredSlides={true} loop={true} autoplay={{ delay: 0, disableOnInteraction: false }} speed={2000} freeMode={true} freeModeMomentum={false} modules={[Autoplay, FreeMode]} >
                    <SwiperSlide><img src={assets.casio} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.amazon} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.moonstar} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.star} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.start_people} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.randstad} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.amazon_vector} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.casio} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.amazon} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.moonstar} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.star} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.start_people} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.randstad} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={assets.amazon_vector} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="grid gap-4 *:shadow-lg pb-10 border-b-2 border-dashed">
                <div className="flex items-center gap-10 p-5 border border-base-100 rounded-2xl bg-white">
                    <div>
                        <img className="w-[500px] md:w-full object-cover" src={assets.live_tracking} alt="" />
                    </div>
                    <div className="pl-4 border-l-2 border-dashed space-y-2">
                        <h1 className="font-bold text-xl">Live Parcel Tracking</h1>
                        <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>
                <div className="flex items-center gap-10 p-5 border border-base-100 rounded-2xl bg-white">
                    <div>
                        <img className="w-[500px] md:w-full object-cover" src={assets.safe_delivery} alt="" />
                    </div>
                    <div className="pl-4 border-l-2 border-dashed space-y-2">
                        <h1 className="font-bold text-xl">100% Safe Delivery</h1>
                        <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>
                <div className="flex items-center gap-10 p-5 border border-base-100 rounded-2xl bg-white">
                    <div>
                        <img className="w-[500px] md:w-full object-cover" src={assets.safe_delivery} alt="" />
                    </div>
                    <div className="pl-4 border-l-2 border-dashed space-y-2">
                        <h1 className="font-bold text-xl">24/7 Call Center Support</h1>
                        <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                </div>
            </div>
            <div className="relative bg-[#03373D] flex flex-col md:flex-row rounded-2xl text-white">
                <img className="w-full absolute top-0" src={assets.be_a_merchant_bg} alt="" />
                <div className="m-10 flex flex-col items-start gap-4 z-10">
                    <h1 className="font-bold text-2xl">Merchant and Customer Satisfaction <br className="hidden md:block" /> is Our First Priority</h1>
                    <p>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="btn btn-primary rounded-full text-black font-bold">Become a Merchant</button>
                        <button className="btn btn-outline border-primary text-primary rounded-full hover:bg-transparent">Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className="flex justify-center items-center m-10">
                    <img src={assets.location_merchant} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Brands
