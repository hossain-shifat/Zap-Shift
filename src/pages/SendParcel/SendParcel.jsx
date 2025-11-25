import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import UseAxiosSecure from '../../hooks/UseAxiosSecure'
import useAuth from '../../hooks/useAuth'

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm()
    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()
    const navigate = useNavigate()

    const serviceCenters = useLoaderData()
    const regionsDuplicate = serviceCenters.map(c => c.region)
    const regions = [...new Set(regionsDuplicate)]
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district)
        return districts
    }


    const handleSendParcel = (data) => {
        console.log(data)

        const isDocument = data.parcelType === 'document'
        const isSameDistrict = data.senderDistrict === data.receiverDistrict
        const parcelWeight = parseFloat(data.parcelWeight)

        let cost = 0
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150
                const extraWeight = parcelWeight - 3
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40
                cost = minCharge + extraCharge
            }
        }


        Swal.fire({
            title: "Agree with the cost?",
            text: `You have to pay ৳${cost} for delivery`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree!"
        }).then((result) => {
            if (result.isConfirmed) {
                const parcelData = { ...data, cost: cost }
                axiosSecure.post('/parcels', parcelData)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/dashboard/my-parcels')
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Parcel has created please pay",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }


    return (
        <div className="bg-base-100 rounded-2xl">
            <div className="pb-5">
                <h1 className="font-bold text-2xl md:text-4xl">Send A Parcel</h1>
            </div>
            <div>
                <div className="pb-5 border-b-2 border-base-200">
                    <h1 className="font-bold text-xl">Enter your parcel details</h1>
                </div>
                <div className="py-5">
                    <form onSubmit={handleSubmit(handleSendParcel)}>
                        <div className="space-y-4 border-b-2 pb-5 border-base-200">
                            {/* radio button */}
                            <div className="flex gap-3">
                                <label className="flex gap-3 cursor-pointer">
                                    <input type="radio" value="document" {...register('parcelType', { required: true })} className="radio radio-primary" defaultChecked />
                                    Document
                                </label>
                                <label className="flex gap-3 cursor-pointer">
                                    <input type="radio" value="not-document" {...register('parcelType', { required: true })} className="radio radio-primary" />
                                    Not-Document
                                </label>
                            </div>
                            {/* parcel input */}
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="grid gap-2 w-full">
                                    <label>Parcel Name</label>
                                    <input type="text" placeholder="Parcel Name" {...register('parcelName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.parcelName?.type === 'required' && <p className="text-red-500">Parcel Name is Required!</p>}
                                </div>
                                <div className="grid gap-2 w-full">
                                    <label>Parcel Weight (KG)</label>
                                    <input type="text" placeholder="Parcel Weight (KG)" {...register('parcelWeight', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                    {errors.parcelWeight?.type === 'required' && <p className="text-red-500">Parcel Weight is Required!</p>}
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 py-5">
                            <div>
                                <div className="pb-2">
                                    <h1 className="font-bold text-lg">Sender Details</h1>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Name</label>
                                        <input type="text" placeholder="Sender Name" defaultValue={user?.displayName} {...register('senderName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.senderName?.type === 'required' && <p className="text-red-500"> Sender Name is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Email</label>
                                        <input type="text" placeholder="Sender Email" defaultValue={user?.email} {...register('senderEmail', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.senderEmail?.type === 'required' && <p className="text-red-500"> Sender Email is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Phone No</label>
                                        <input type="text" placeholder="Sender Phone No" {...register('senderPhone', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.senderPhone?.type === 'required' && <p className="text-red-500"> Sender Contact No. is Required!</p>}
                                    </div>
                                    <div>
                                        <fieldset className="grid gap-2 w-full">
                                            <label>Sender Region</label>
                                            <select defaultValue="Pick a Region" {...register('senderRegion', { required: true })} className="select w-full">
                                                <option disabled={true}>Pick a Region</option>
                                                {
                                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                                }
                                            </select>
                                            {errors.senderRegion?.type === 'required' && <p className="text-red-500"> Sender Region is Required!</p>}
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="grid gap-2 w-full">
                                            <label>Sender District</label>
                                            <select defaultValue="Pick a district" {...register('senderDistrict', { required: true })} className="select w-full">
                                                <option disabled={true}>Pick a District</option>
                                                {
                                                    districtsByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                                }
                                            </select>
                                            {errors.senderDistrict?.type === 'required' && <p className="text-red-500"> Sender District is Required!</p>}
                                        </fieldset>
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Sender Address</label>
                                        <input type="text" placeholder="Sender Address" {...register('senderAddress', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.senderAddress?.type === 'required' && <p className="text-red-500">Sender address is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Pickup Instruction</label>
                                        <textarea placeholder="Pickup Instruction" {...register('pickupInstruction', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                        {errors.pickupInstruction?.type === 'required' && <p className="text-red-500"> Pickup Instruction is Required!</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pb-2">
                                    <h1 className="font-bold text-lg">Receiver Details</h1>
                                </div>
                                <div className="space-y-5">
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Name</label>
                                        <input type="text" placeholder="Receiver Name" {...register('receiverName', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.receiverName?.type === 'required' && <p className="text-red-500"> Receiver Name is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Email</label>
                                        <input type="text" placeholder="Receiver Email" {...register('receiverEmail', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.receiverEmail?.type === 'required' && <p className="text-red-500"> Receiver Email is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Contact No</label>
                                        <input type="text" placeholder="Receiver Contact No" {...register('receiverPhone', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.receiverPhone?.type === 'required' && <p className="text-red-500"> Receiver Contact No. is Required!</p>}
                                    </div>
                                    <div>
                                        <fieldset className="grid gap-2 w-full">
                                            <label>Receiver Region</label>
                                            <select defaultValue="Pick a Region" {...register('receiverRegion', { required: true })} className="select w-full">
                                                <option disabled={true}>Pick a Region</option>
                                                {
                                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                                }
                                            </select>
                                            {errors.receiverRegion?.type === 'required' && <p className="text-red-500"> Receiver Region is Required!</p>}
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="grid gap-2 w-full">
                                            <label>Receiver District</label>
                                            <select defaultValue="Pick a district" {...register('receiverDistrict', { required: true })} className="select w-full">
                                                <option disabled={true}>Pick a District</option>
                                                {
                                                    districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                                }
                                            </select>
                                            {errors.receiverDistrict?.type === 'required' && <p className="text-red-500"> Receiver District is Required!</p>}
                                        </fieldset>
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Receiver Address</label>
                                        <input type="text" placeholder="Receiver Address" {...register('receiverAddress', { required: true })} className="input input-md w-full focus-within:outline-none" />
                                        {errors.receiverAddress?.type === 'required' && <p className="text-red-500">Receiver Address is Required!</p>}
                                    </div>
                                    <div className="grid gap-2 w-full">
                                        <label>Delivery Instruction</label>
                                        <textarea placeholder="Delivery Instruction" {...register('deliveryInstruction', { required: true })} className="textarea textarea-md w-full focus-within:outline-none"></textarea>
                                        {errors.deliveryInstruction?.type === 'required' && <p className="text-red-500"> Delivery Instruction is Required!</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-5">
                                <h1>* PickUp Time 4pm-7pm Approx.</h1>
                            </div>
                            <div>
                                <button className="btn btn-primary font-bold text-black">Proceed to Confirm Booking</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendParcel
