import React from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { ShieldPlus, ShieldX } from 'lucide-react'
import Swal from 'sweetalert2'

const UserManagement = () => {

    const axiosSecure = UseAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })


    const handleMakeUser = (user) => {
        const roleInfo = { role: 'admin' }
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} is marked as ${user.role}`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
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
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex gap-4">
                                            <div>
                                                <img className="w-10 h-10 rounded-lg" src={user.photoURL} alt="" />
                                            </div>
                                            <div>
                                                {user.displayName}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="flex gap-3 justify-center items-center">
                                        {
                                            user.role === 'admin' ?
                                                <button className="btn btn-square btn-outline hover:bg-transparent"><ShieldX size={18} /> </button>
                                                :
                                                <button onClick={() => handleMakeUser(user)} className="btn btn-square btn-outline hover:bg-transparent"><ShieldPlus size={18} /> </button>
                                        }
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

export default UserManagement
