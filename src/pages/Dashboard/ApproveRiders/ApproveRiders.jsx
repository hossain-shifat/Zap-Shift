import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import { Trash2, UserRoundCheck, UserRoundX } from 'lucide-react'
import Swal from 'sweetalert2'
import Loading from '../../../components/Loading/Loading'

const ApproveRiders = () => {

    const axiosSecure = UseAxiosSecure()

    const { isLoading, refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.riderEmail }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Rider has been ${status}`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleApprved = (rider) => {
        updateRiderStatus(rider, 'approved')
    }
    const handleRejection = (rider) => {
        updateRiderStatus(rider, 'rejected')
    }

    if (isLoading) {
        return <Loading />
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
                            <th>Email</th>
                            <th>Status</th>
                            <th>District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{rider.riderName}</td>
                                    <td>{rider.riderEmail}</td>
                                    <td className={`${rider.status === 'pending' ? 'text-orange-400' : rider.status === 'approved' ? 'text-green-600' : 'text-red-500'}`}>{rider.status}</td>
                                    <td>{rider.riderDistrict}</td>
                                    <td className="flex gap-2">
                                        <button onClick={() => handleApprved(rider)} className="btn btn-square btn-sm hover:bg-transparent"><UserRoundCheck size={18} /></button>
                                        <button onClick={() => handleRejection(rider)} className="btn btn-square btn-sm hover:bg-transparent"><UserRoundX size={18} /></button>
                                        <button className="btn btn-square btn-sm hover:bg-transparent"><Trash2 size={18} /></button>
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

export default ApproveRiders
