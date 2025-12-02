import React from 'react'
import { assets } from '../../../assets/assets'

const OurServices = () => {
    return (
        <div className="bg-[#03373D] p-5 md:p-10 space-y-5 rounded-2xl">
            <div className="space-y-3">
                <h1 className="font-bold text-2xl text-center text-white">Our Services</h1>
                <p className="text-center text-white">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br/> business shipments — we deliver on time, every time.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center *:max-w-[270px] *:mx-auto *:grid *:justify-center">
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Express  & Standard Delivery</h1>
                        <p className="text-gray-600">We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                    </div>
                </div>
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Nationwide Delivery</h1>
                        <p className="text-gray-600">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
                    </div>
                </div>
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Fulfillment Solution</h1>
                        <p className="text-gray-600">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                </div>
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Cash on Home Delivery</h1>
                        <p className="text-gray-600">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                </div>
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Corporate Service / Contract In Logistics</h1>
                        <p className="text-gray-600">Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                </div>
                <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                    <div>
                        <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl w-3xs mx-auto">Parcel Return</h1>
                        <p className="text-gray-600">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
