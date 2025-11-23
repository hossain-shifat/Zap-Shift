import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { assets } from '../../../assets/assets'
import { useLocation, useNavigate } from 'react-router'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'

const SocialLogin = () => {

    const { singInGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()

    const handleSingInPopUp = () => {
        singInGoogle()
            .then(result => {
                console.log(result.user)

                // create user in the database
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state?.from?.pathname || "/");
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleSingInPopUp} className="btn bg-white text-black border-[#e5e5e5] w-full"><img src={assets.google} className="w-7 h-7" alt="" />Register with Google</button>
        </div>
    )
}

export default SocialLogin
