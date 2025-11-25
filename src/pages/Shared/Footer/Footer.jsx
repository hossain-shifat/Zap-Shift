import React from 'react'
import Logo from '../../../components/Logo/Logo'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center text-center border border-base-200 shadow-xl p-4 bg-black *:text-white rounded-2xl gap-10">
            <div className="space-y-5">
                <Logo />
                <p className="max-w-[300px] md:max-w-full">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal package to <br/> business shipments — we deliver on time, every time.</p>
            </div>
            <div className="border-b-2 border-t-2 border-dashed py-3 w-full max-w-[1100px]">
                <ul className="flex gap-3 flex-wrap justify-center">
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
