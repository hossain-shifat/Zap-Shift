import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import { BookOpenText, Edit, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'
import { Link } from 'react-router'

const MyParcels = () => {

    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-profile', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
        console.log(res.data)
        window.location.assign(res.data.url);
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.cost}</td>
                                    <td>
                                        {
                                            parcel.paymentStatus === 'paid' ? <span className="text-green-400 font-bold text-lg">paid</span> : <button onClick={() => handlePayment(parcel)} className="btn btn-primary btn-sm text-black">Pay</button>
                                        }
                                    </td>
                                    <td>Schaden</td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-square btn-sm hover:bg-primary">
                                            <Edit size={16} />
                                        </button>
                                        <button className="btn btn-square btn-sm hover:bg-primary">
                                            <BookOpenText size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(parcel._id)} className="btn btn-square btn-sm hover:bg-primary">
                                            <Trash2 size={16} />
                                        </button>
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

export default MyParcels
