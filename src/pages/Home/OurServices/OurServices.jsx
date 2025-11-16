import React from 'react'
import { assets } from '../../../assets/assets'

const OurServices = () => {
    return (
        <div className="space-y-5">
            <div className="font-bold text-2xl">
                <h1>Our Services</h1>
            </div>
            <div className="bg-[#03373D] p-8 md:p-10 rounded-2xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Express  & Standard Delivery</h1>
                            <p className="text-gray-600">We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                        </div>
                    </div>
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Nationwide Delivery</h1>
                            <p className="text-gray-600">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.</p>
                        </div>
                    </div>
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Fulfillment Solution</h1>
                            <p className="text-gray-600">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                        </div>
                    </div>
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Cash on Home Delivery</h1>
                            <p className="text-gray-600">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                        </div>
                    </div>
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Corporate Service / Contract In Logistics</h1>
                            <p className="text-gray-600">Customized corporate services which includes warehouse and inventory management support.</p>
                        </div>
                    </div>
                    <div className="text-center border space-y-3 rounded-xl p-4 bg-white border-base-100 shadow-lg hover:bg-primary hover:border-primary">
                        <div>
                            <img src={assets.service} className="max-w-full mx-auto p-4 rounded-full bg-linear-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.1)]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-bold text-xl w-3xs">Parcel Return</h1>
                            <p className="text-gray-600">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
