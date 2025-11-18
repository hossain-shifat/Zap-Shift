import { ArrowUp, Eye, EyeClosed, User } from 'lucide-react'
import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { register } from 'swiper/element'
import useAuth from '../../../hooks/useAuth'

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, singInGoogle } = useAuth()

    const handleRegistration = (data) => {
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSingInPopUp = () => {
        singInGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="max-w-full mx-auto md:mx-15 md:-mt-5">
            <div className="w-full max-w-[450px] p-7 rounded-2xl">
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">
                    <div className="space-y-1">
                        <h1 className="font-bold text-4xl">Create an Account</h1>
                        <p className="">Register with ZapShift</p>
                    </div>
                    {/* image upload feild */}
                    <div className="w-16 h-16">
                        <label className="cursor-pointer">
                            <div className="relative flex justify-center items-center w-15 h-15">
                                <User size={40} className="" fill='gray' stroke='gray' />
                                <ArrowUp size={25} className="absolute text-primary  rounded-full bg-white -right-2 bottom-0" />
                            </div>
                            <input type="file" name='file' className="hidden" />
                        </label>
                    </div>
                    {/* name feild */}
                    <div>
                        <label className="text-lg">Name</label>
                        <input type="text" placeholder='Name' {...register('name', { required: true })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                        {errors.name?.type === 'required' && <p className="text-red-500">Name is Required!</p>}
                    </div>
                    {/* email feild */}
                    <div>
                        <label className="text-lg">Email</label>
                        <input type="email" placeholder='Email' {...register('email', { required: true })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                        {errors.email?.type === 'required' && <p className="text-red-500">Email is Required!</p>}
                    </div>
                    {/* password feild */}
                    <div>
                        <label>Password</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' {...register('password', { required: true, minLength: 6 })} className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 cursor-pointer">{showPassword ? <EyeClosed /> : <Eye />}</span>
                            {errors.password?.type === 'required' && <p className="text-red-500">Password is Required!</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters or longer</p>}
                            {/* {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have an uppercase, at least one lowercase, atleast one number and at least one special character</p>} */}
                        </div>
                    </div>
                    <div className="w-full my-2">
                        <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="hover:underline text-primary cursor-pointer">Login</Link></p>
                </form>
                <div>
                    <div className="flex justify-center items-center gap-2 my-1">
                        <hr className="w-[45%]" />
                        <h1>Or</h1>
                        <hr className="w-[45%]" />
                    </div>
                    <div className="w-full">
                        <button onClick={handleSingInPopUp} className="btn bg-white text-black border-[#e5e5e5] w-full"><img src={assets.google} className="w-7 h-7" alt="" />Register with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
