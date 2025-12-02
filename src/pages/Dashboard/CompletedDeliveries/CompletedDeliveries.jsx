import React from 'react'
import useAuth from '../../../hooks/useAuth'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading'

const CompletedDeliveries = () => {

    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()

    const { isLoading, data: parcels = [], refetch } = useQuery({
        queryKey: ['parcel', user.email, 'rider-assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel-delivered`)
            return res.data
        }
    })

    const calculatePayout = (parcel) => {
        if (parcel.senderDistrict === parcel.receiverDistrict) {
            return parcel.cost * 0.8
        } else {
            return parcel.cost * 0.6
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-10">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Completed Deliveries</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Created At</th>
                            <th>Pickup Address</th>
                            <th>Delivery Address</th>
                            <th>Operation</th>
                            <th>Cost</th>
                            <th>Payout</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => (
                                <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td className="capitalize">{parcel.parcelName}</td>
                                    <td>{
                                        new Date(parcel.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    }</td>
                                    <td>{parcel.senderRegion}, {parcel.senderDistrict}</td>
                                    <td>{parcel.receiverRegion}, {parcel.receiverDistrict}</td>
                                    <td>Completed</td>
                                    <td>${parcel.cost}</td>
                                    <td>${calculatePayout(parcel)}</td>
                                    <td>
                                        <button className="btn btn-primary text-black">Cashout</button>
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

export default CompletedDeliveries
