import React from 'react'
import { Link } from 'react-router'

const ForgetPassword = () => {
  return (
      <div className="max-w-full mx-auto md:mx-15">
          <div class="w-full max-w-[450px] p-7 rounded-2xl">
              <form>
                  <div className="space-y-1">
                      <h1 className="font-bold text-4xl">Forgot Password</h1>
                      <p className="">Enter your email address and we’ll send you a reset link.</p>
                  </div>
                  <div className="my-4">
                      <label className="text-lg">Email</label>
                      <input type="email" placeholder='Email' name='email' className="w-full p-3 bg-base-100 rounded-xl border focus-within:outline outline-[#94A3B8] placeholder:text-[#94A3B8] text-base-content text-md" />
                  </div>
                  <div className="w-full my-4">
                      <button className="btn btn-primary w-full text-black font-bold text-[1.1rem] rounded-xl">Login</button>
                  </div>
                  <p>Remember your password? <Link to='/login' className="hover:underline text-primary cursor-pointer">Login</Link></p>
              </form>
          </div>
      </div>
  )
}

export default ForgetPassword
