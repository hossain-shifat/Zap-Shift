import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const FAQ = () => {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="font-bold text-2xl text-center">Frequently Asked Question (FAQ)</h1>
            </div>
            <div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq" />
                    <div className="collapse-title font-semibold">
                        Is it suitable for all ages and body types?
                    </div>
                    <div className="collapse-content text-sm">
                        Yes! It is designed to fit all ages and support different body types comfortably.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq" />
                    <div className="collapse-title font-semibold">
                        Does it really help with back pain and posture improvement?
                    </div>
                    <div className="collapse-content text-sm">
                        Regular use helps reduce back pain and improves posture by aligning your spine naturally.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq" />
                    <div className="collapse-title font-semibold">
                        Does it have smart features like vibration alerts?
                    </div>
                    <div className="collapse-content text-sm">
                        Yes! It vibrates gently when you slouch to remind you to maintain proper posture.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="faq" />
                    <div className="collapse-title font-semibold">
                        How will I be notified when the product is back in stock?
                    </div>
                    <div className="collapse-content text-sm">
                        You will receive an email or SMS alert instantly once it is available.
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-4">
                <button className="btn btn-primary rounded-lg font-bold text-black">Be a Raider</button>
                <h1 className="flex justify-center items-center w-10 h-10 rounded-full bg-[#0B0B0B] text-primary"><ArrowUpRight /></h1>
            </div>
        </div>
    )
}

export default FAQ
