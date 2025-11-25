import React from 'react'
import { useForm } from 'react-hook-form'

const VerificationCode = () => {
    const { register, handleSubmit } = useForm()
    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit='{handleSubmit(handleLogin)}'>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Enter Code</h1>
                        <p className="">Enter 6 digit code that we sent in your email address</p>
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Enter the Code</label>
                        <div className="flex gap-4 mt-4">
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                            <input type="tel" className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-center text-md" />
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerificationCode
