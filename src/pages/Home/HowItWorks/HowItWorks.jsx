import { Truck } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
    return (
        <div className="space-y-5">
            <div className="font-bold text-2xl">
                <h1>How It Works</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 *:border-base-100 *:bg-white *:shadow-lg">
                <div className="border space-y-3 rounded-xl p-4">
                    <div>
                        <Truck size={40} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl">Booking Pick & Drop</h1>
                        <p className="text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="border space-y-3 rounded-xl p-4">
                    <div>
                        <Truck size={40} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl">Cash On Delivery</h1>
                        <p className="text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="border space-y-3 rounded-xl p-4">
                    <div>
                        <Truck size={40} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl">Delivery Hub</h1>
                        <p className="text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div className="border space-y-3 rounded-xl p-4">
                    <div>
                        <Truck size={40} />
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold text-xl">Booking SME & Corporate</h1>
                        <p className="text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
