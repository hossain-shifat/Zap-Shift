import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import Loading from '../../../components/Loading/Loading'

const AssignRiders = () => {

    const [selectedParcel, setSelectedParcel] = useState()
    const axiosSecure = UseAxiosSecure()
    const riderModalRef = useRef()

    // load data for parcels (delivaruStatus = prnding-pickup only)
    const { isLoading, data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })

    // load data for the available riders
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel.senderDistrict}&workStatus=available`)
            return res.data
        }
    })

    // handle modal to assign the rider
    const openAssignRiderModal = (rider) => {
        setSelectedParcel(rider)
        riderModalRef.current.showModal()
    }

    // handle assign rider
    const handleAssighRider = (rider) => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderEmail: rider.riderEmail,
            riderName: rider.riderName,
            parcelId: selectedParcel._id
        }
        axiosSecure.patch(``, riderAssignInfo)
    }

    if (isLoading) return <Loading />

    return (
        <div className="space-y-4">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Assign Riders</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Tracking Id</th>
                            <th>Delivery Status</th>
                            <th>Created At</th>
                            <th>Pickup Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((rider, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td className="capitalize">{rider.parcelName}</td>
                                    <td>${rider.cost}</td>
                                    <td>{rider.trackingId}</td>
                                    <td>{rider.deliveryStatus}</td>
                                    <td>{
                                        new Date(rider.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    }</td>
                                    <td>{rider.senderRegion}, {rider.senderDistrict}</td>
                                    <td className="flex gap-2">
                                        <button onClick={() => openAssignRiderModal(rider)} className="btn btn-primary text-black">Find Riders</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    riders.map((rider, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td className="capitalize">{rider.riderName}</td>
                                            <td>{rider.riderEmail}</td>
                                            <td><button onClick={() => handleAssighRider(rider)} className="btn btn-primary text-black">Assign</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default AssignRiders
