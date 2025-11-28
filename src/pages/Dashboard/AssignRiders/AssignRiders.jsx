import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import Loading from '../../../components/Loading/Loading'

const AssignRiders = () => {
    const axiosSecure = UseAxiosSecure()

    const { isLoading, data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })

    console.log(parcels)

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
                                        <button className="btn btn-primary text-black">Assign Rider</button>
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

export default AssignRiders
