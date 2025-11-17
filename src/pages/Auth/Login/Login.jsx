import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Welcome Back</h1>
                        <p className="">Login with ZapShift</p>
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
                    <div className="my-4">
                        <p className="text-[#71717A] underline cursor-pointer">Forget Password</p>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Login</button>
                    </div>
                    <p>Don't Have an account <span className="underline text-blue-600">Register</span></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-2">
                        <hr className="w-[45%]" />
                        <h1>Or</h1>
                        <hr className="w-[45%]" />
                    </div>
                    <div className="w-full">
                        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
