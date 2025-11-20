import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'

const MyParcels = () => {

    const { user } = useAuth()
    const axiosSecure = UseAxiosSecure()
    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h1>my parcels {parcels.length}</h1>
        </div>
    )
}

export default MyParcels
