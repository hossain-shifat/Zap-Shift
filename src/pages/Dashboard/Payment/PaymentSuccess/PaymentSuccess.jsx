import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import UseAxiosSecure from '../../../../hooks/UseAxiosSecure'
import { ArrowLeft, BadgeCheck, Download, Mail } from 'lucide-react'

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const [paymentInfo, setPaymentInfo] = useState({})
    const sessionId = searchParams.get('session_id')
    const axiosSecure = UseAxiosSecure()

    console.log(sessionId)

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data)
                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        trakingId: res.data.trakingId,
                        amount: res.data.amount,
                        customerEmail: res.data.customerEmail,
                        paidAt: res.data.paidAt
                    })
                })
        }
    }, [sessionId, axiosSecure])

    const formatted = new Date(paymentInfo.paidAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    return (
        <div className="max-w-[450px] p-5 md:p-10 mx-auto border border-base-200 rounded-2xl text-base-content">
            <div>
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-center items-center py-4">
                            <span className="flex justify-center items-center w-15 h-15 rounded-full bg-green-100"><BadgeCheck stroke='green' /></span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold text-2xl text-green-400">Payment Successful!</h1>
                            <p>Your payment has been processed successfully. You will receive a confirmation email shortly.</p>
                        </div>
                    </div>
                    <div className="pb-2 border-b-2 border-base-200">
                        <div className="flex justify-between items-center">
                            <h1>Amount</h1>
                            <p>${paymentInfo.amount}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                        <h1>Transaction ID</h1>
                        <p className="p-0.5 px-1 text-[0.8rem] rounded-sm border border-base-200">{paymentInfo.transactionId}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Payment Details</h1>
                        <p className="">**** 4242</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Date</h1>
                        <p className="">{formatted}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Merchant</h1>
                        <p className="">Zap Shift</p>
                    </div>
                </div>
                <div className=" text-center py-5">
                    <p className="flex justify-center items-center gap-2"><Mail size={18}/> Receipt sent to {paymentInfo.customerEmail}</p>
                </div>
                <div className="space-y-2 w-full">
                    <button className="btn btn-primary w-full text-black"><Download size={18} />Download Receipt</button>
                    <Link to='/dashboard/my-parcels' className="btn btn-primary btn-outline w-full"><ArrowLeft size={18} />Back to My Parcels</Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
