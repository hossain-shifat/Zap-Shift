import React from 'react'
import Logo from '../../../components/Logo/Logo'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center text-center border p-4 bg-[#0B0B0B] *:text-white rounded-xl gap-10">
            <div className="space-y-5">
                <Logo />
                <p className="max-w-[300px] md:max-w-full">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal package to <br/> business shipments — we deliver on time, every time.</p>
            </div>
            <div>
                <ul className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <li>Services</li>
                    <li>Coverage</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex gap-3">
                <Linkedin/>
                <Twitter/>
                <Facebook/>
                <Youtube/>
            </div>
        </footer>
    )
}

export default Footer
