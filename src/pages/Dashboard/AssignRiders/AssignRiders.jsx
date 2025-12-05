import { useQuery } from '@tanstack/react-query'
import React, { useRef, useState } from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import Loading from '../../../components/Loading/Loading'
import Swal from 'sweetalert2'

const AssignRiders = () => {

    const [selectedParcel, setSelectedParcel] = useState()
    const axiosSecure = UseAxiosSecure()
    const riderModalRef = useRef()

    // load data for parcels (delivaruStatus = prnding-pickup only)
    const { isLoading, data: parcels = [], refetch: parcelRefetch } = useQuery({
        queryKey: ['parcels', 'parcel-paid'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=parcel-paid')
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
            parcelId: rider._id,
            trackingId: rider.trackingId
        }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    parcelRefetch()
                    riderModalRef.current.close()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Rider has been assigned`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
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
                            parcels.map((parcel, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td className="capitalize">{parcel.parcelName}</td>
                                    <td>${parcel.cost}</td>
                                    <td>{parcel.trackingId}</td>
                                    <td>{parcel.deliveryStatus}</td>
                                    <td>{
                                        new Date(parcel.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    }</td>
                                    <td>{parcel.senderRegion}, {parcel.senderDistrict}</td>
                                    <td className="flex gap-2">
                                        <button onClick={() => openAssignRiderModal(parcel)} className="btn btn-primary text-black">Find Riders</button>
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
