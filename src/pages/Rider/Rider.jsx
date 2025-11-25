import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useForm, useWatch } from 'react-hook-form'
import { assets } from '../../assets/assets'
import { useLoaderData } from 'react-router'
import UseAxiosSecure from '../../hooks/UseAxiosSecure'
import Swal from 'sweetalert2'

const Rider = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm()
    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()


    const serviceCenters = useLoaderData()
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const yourRegion = useWatch({ control, name: 'riderRegion' })

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district)
        return districts
    }

    const handleRiderSubmit = (data) => {
        console.log(data)
        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application has been submitted. We will reach to you in 14 days",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <div className="space-y-10">
            <div className="space-y-3 pb-4 border-b border-base-200">
                <h1 className="font-bold text-2xl md:text-4xl">Be a Rider</h1>
                <p className="max-w-2xl">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="md:flex p-5 md:p-0 gap-10">
                <div className="md:flex-1">
                    <form onSubmit={handleSubmit(handleRiderSubmit)}>
                        <div className="space-y-2">
                            <div className="pb-2">
                                <h1 className="font-bold text-xl">Tell us about yourself</h1>
                            </div>
                            <div className="space-y-5">
                                <div className="grid gap-2 w-full">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="Your Name" defaultValue={user?.displayName} {...register('riderName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.riderName?.type === 'required' && <p className="text-red-500"> Your Name is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Driving License Number</label>
                                    <input type="text" placeholder="Driving License Number" {...register('drivingLicenseNumber', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.drivingLicenseNumber?.type === 'required' && <p className="text-red-500"> Driving License Number!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Your Email</label>
                                    <input type="text" placeholder="Your Email" defaultValue={user?.email} {...register('riderEmail', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.riderEmail?.type === 'required' && <p className="text-red-500"> Your Email is Required!</p>}
                                </div>
                                <div>
                                    <fieldset className="grid gap-2 w-full">
                                        <label>Your Region</label>
                                        <select defaultValue="Pick a Region" {...register('riderRegion', { required: true })} className="select w-full">
                                            <option disabled={true}>Pick a Region</option>
                                            {
                                                regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                            }
                                        </select>
                                        {errors.riderRegion?.type === 'required' && <p className="text-red-500"> Your Region is Required!</p>}
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="grid gap-2 w-full">
                                        <label>Your District</label>
                                        <select defaultValue="Pick a district" {...register('riderDistrict', { required: true })} className="select w-full">
                                            <option disabled={true}>Pick a District</option>
                                            {
                                                districtsByRegion(yourRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                            }
                                        </select>
                                        {errors.riderDistrict?.type === 'required' && <p className="text-red-500"> Your District is Required!</p>}
                                    </fieldset>
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>NID No</label>
                                    <input type="text" placeholder="NID No" {...register('riderNID', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.riderNID?.type === 'required' && <p className="text-red-500"> NID No. is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Your Phone No</label>
                                    <input type="text" placeholder="Your Phone No" {...register('riderPhone', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.riderPhone?.type === 'required' && <p className="text-red-500"> Your Contact No. is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Bike Brand Model and Year</label>
                                    <input type="text" placeholder="Bike Brand Model and Year" {...register('bikeBrandModelAndYear', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.bikeBrandModelAndYear?.type === 'required' && <p className="text-red-500">Bike Brand Model and Year is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Bike Registration Number</label>
                                    <input type="text" placeholder="Bike Registration Number" {...register('bikeRegistrationNumber', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.bikeRegistrationNumber?.type === 'required' && <p className="text-red-500">Bike Registration Number is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Tell Us About Yourself</label>
                                    <textarea placeholder="Tell Us About Yourself" {...register('riderDescription', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                    {errors.riderDescription?.type === 'required' && <p className="text-red-500"> Tell Us About Yourself is Required!</p>}
                                </div>
                            </div>
                            <div className="w-full">
                                <button className="btn btn-primary text-base-content w-full">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex-1">
                    <img className="hidden md:block md:max-w-[400px]" src={assets.agent_pending} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Rider
