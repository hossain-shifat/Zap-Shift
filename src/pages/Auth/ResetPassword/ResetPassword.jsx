import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

const ResetPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Reset Password</h1>
                        <p className="">Reset your Password</p>
                    </div>
                    <div className="my-4">
                        <label>New Password</label>
                        <div className="relative">
                            <input type={showNewPassword ? 'text' : 'password'} placeholder='Password' name='password' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-3 cursor-pointer">{showNewPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                    </div>
                    <div className="my-4">
                        <label>Confirm Password</label>
                        <div className="relative">
                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Password' name='password' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-3 cursor-pointer">{showConfirmPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
