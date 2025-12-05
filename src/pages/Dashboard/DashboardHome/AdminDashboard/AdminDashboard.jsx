import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAxiosSecure from '../../../../hooks/UseAxiosSecure'
import { AlertCircle, Clock, DollarSign, PackageCheck, UserCheck } from 'lucide-react'

const AdminDashboard = () => {

    const statusIcons = {
        "parcel-delivered": <PackageCheck size={30} className="text-green-500" />,
        "pending-pickup": <Clock size={30} className="text-yellow-500" />,
        "rider-assigned": <UserCheck size={30} className="text-blue-500" />,
        "parcel-paid": <DollarSign size={30} className="text-purple-500" />,
        null: <AlertCircle size={30} className="text-red-500" />
    }

    const axiosSecure = UseAxiosSecure()

    const { data: stats = [] } = useQuery({
        queryKey: ['delivery-status-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('parcels/delivery-status/stats')
            return res.data
        }
    })

    return (
        <div>
            <div className="flex gap-5 justify-center">
                {
                    stats.map(stat => (
                        <div className="flex gap-3 items-center border border-base-100 bg-base-100 p-4 rounded-xl">
                            <div>
                                {statusIcons[stat._id] || <AlertCircle className="w-10 h-10 text-gray-400" />}
                            </div>
                            <div>
                                <h1 className="font-semibold">{stat._id}</h1>
                                <p className="text-2xl font-bold">{stat.count}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminDashboard
