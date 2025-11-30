import React from 'react'
import Loading from '../components/Loading/Loading'
import Forbidden from '../components/Forbidden/Forbidden'
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole'

const RiderRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <Loading />
    }

    if (role !== 'rider') {
        return <Forbidden />
    }


    return children
}

export default RiderRoutes
