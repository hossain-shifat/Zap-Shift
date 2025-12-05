import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router'
import UseAxios from '../../hooks/UseAxios'
import { CircleCheck } from 'lucide-react'

const TrackParcel = () => {

    const { trackingId } = useParams()
    const axiosInstance = UseAxios()

    const { data: trackings = [] } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: async () => {
            const res = await axiosInstance.get(`/trackings/${trackingId}/logs`)
            return res.data
        }
    })

    console.log(trackings)

    return (
        <div>
            <div>
                <h1 className="font-black text-2xl md:text-3xl">Track Your Parcel: {trackingId}</h1>
            </div>
            <ul className="timeline timeline-vertical">
                {
                    trackings.map(tracking => (
                        <li key={tracking._id}>
                            <div className="timeline-start">
                                {
                                    new Date(tracking.createdAt).toLocaleString()}
                            </div>
                            <div className="timeline-middle">
                                <CircleCheck size={18}/>
                            </div>
                            <div className="timeline-end timeline-box">{tracking.details}</div>
                            <hr />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TrackParcel
