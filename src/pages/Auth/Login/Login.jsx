import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit } = useForm()
    const { singInUser, singInGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (data) => {
        singInUser(data.email, data.password)
            .then(result => {
                console.log(result)
                navigate(location.state?.from?.pathname || "/");
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSingInPopUp = () => {
        singInGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location.state?.from?.pathname || "/");
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="max-w-full mx-auto md:mx-15">
            <div class="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Welcome Back</h1>
                        <p className="">Login with ZapShift</p>
                    </div>
                    <div className="my-4">
                        <label className="text-lg">Email</label>
                        <input type="email" placeholder='Email' {...register('email')} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                    </div>
                    <div className="my-4">
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password')} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer">{showPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                    </div>
                    <div className="my-4">
                        <Link to="/forget-password" className="text-[#71717A] underline cursor-pointer">Forget Password?</Link>
                    </div>
                    <div className="w-full my-4">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Login</button>
                    </div>
                    <p>Don't have any account? <Link state={location.state} to='/register' className="hover:underline text-primary cursor-pointer">Register</Link></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-2">
                        <hr className="w-[45%]" />
                        <h1>Or</h1>
                        <hr className="w-[45%]" />
                    </div>
                    <div className="w-full">
                        <button onClick={handleSingInPopUp} className="btn bg-base-100 text-black border-[#e5e5e5] w-full"><img src={assets.google} className="w-7 h-7" alt="" />Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
