import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import Swal from 'sweetalert2'

const AssignDeliveries = () => {

    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcel', user.email, 'rider-assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=rider-assigned`)
            return res.data
        }
    })


    const handleStatusUpdate = (parcel, status) => {
        const statusInfo = { deliveryStatus: status, riderId: parcel.riderId }

        let message = `Parcel Status is updated with ${status}`

        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Assign Delivery</h1>
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
                            <th>Created At</th>
                            <th>Pickup Address</th>
                            <th>Delivery Address</th>
                            <th>Operation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => (
                                <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td className="capitalize">{parcel.parcelName}</td>
                                    <td>${parcel.cost}</td>
                                    <td>{parcel.trackingId}</td>
                                    <td>{
                                        new Date(parcel.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    }</td>
                                    <td>{parcel.senderRegion}, {parcel.senderDistrict}</td>
                                    <td>{parcel.receiverRegion}, {parcel.receiverDistrict}</td>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            {
                                                parcel.deliveryStatus === 'rider-assigned' ?
                                                    <>
                                                        <button onClick={() => handleStatusUpdate(parcel, 'rider-arriving')} className="btn btn-primary text-black">Accept</button>
                                                        <button onClick={() => openAssignRiderModal(parcel)} className="btn btn-error text-base-content">Reject</button>
                                                    </>
                                                    :
                                                    <span>Accepted</span>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleStatusUpdate(parcel, 'parcel-picked-up')} className="btn btn-primary btn-sm font-bold text-black">Mark as Pick Up</button>
                                            <button onClick={() => handleStatusUpdate(parcel, 'parcel-delivered')} className="btn btn-primary btn-sm font-bold text-black">Mark as Delivered</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AssignDeliveries
