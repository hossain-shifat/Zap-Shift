import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import UseAxiosSecure from '../../../../hooks/UseAxiosSecure'
import { BookOpenText } from 'lucide-react'
import Loading from '../../../../components/Loading/Loading'

const PaymentHIstory = () => {

    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()

    const { isLoading, data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-bold text-2xl md:text-4xl">Payment History</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Parcel Info</th>
                                <th>Recipient Info</th>
                                <th>Transaction Id</th>
                                <th>Payment Info</th>
                                <th>Paid Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}.</th>
                                        <td>{payment.parcelName}</td>
                                        <td>
                                            <div className="p-3 space-y-3">
                                                <div>
                                                    <p>{payment.receiverName}</p>
                                                </div>
                                                <div>
                                                    <p>{payment.recipientAddress}</p>
                                                    <p>{payment.receiverPhone}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{payment.transactionId}</td>
                                        <td>${payment.amount} ({payment.paymentStatus})</td>
                                        <td>
                                            {
                                                new Date(payment.paidAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })
                                            }
                                        </td>
                                        <td>
                                            <button className="btn btn-square btn-primary btn-sm"><BookOpenText size={18} /></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentHIstory
