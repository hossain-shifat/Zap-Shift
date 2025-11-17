import { ArrowUp, Eye, EyeClosed, User } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Create an Account</h1>
                        <p className="">Register with ZapShift</p>
                    </div>
                    <div className="my-4">
                        <label className="cursor-pointer">
                            <div className="relative flex justify-center items-center w-15 h-15">
                                <User size={40} className="" fill='gray' stroke='gray' />
                                <ArrowUp size={25} className="absolute text-primary w-7 h-7 rounded-full bg-white -right-2 bottom-0"/>
                            </div>
                            <input type="file" name='file' className="hidden" />
                        </label>
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Name</label>
                        <input type="text" placeholder='Name' name='name' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Email</label>
                        <input type="email" placeholder='Email' name='email' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                    </div>
                    <div className="my-4">
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' name='password' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer">{showPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="hover:underline text-primary cursor-pointer">Login</Link></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-2">
                        <hr className="w-[45%]" />
                        <h1>Or</h1>
                        <hr className="w-[45%]" />
                    </div>
                    <div className="w-full">
                        <button className="btn bg-white text-black border-[#e5e5e5] w-full"><img src={assets.google} className="w-7 h-7" alt="" />Register with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
