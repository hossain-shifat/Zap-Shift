import React, { useState } from 'react'
import UseAxiosSecure from '../../../hooks/UseAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Search, ShieldPlus, ShieldX } from 'lucide-react'
import Swal from 'sweetalert2'

const UserManagement = () => {

    const axiosSecure = UseAxiosSecure()
    const [search, setSearch] = useState('')

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`)
            return res.data
        }
    })


    const updateAdminAction = (user, status) => {
        const roleInfo = { role: status }
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {

                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            refetch()
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${user.displayName} is marked as ${status}`,
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    });
                }
            })
    }

    const handleMakeAdmin = (user) => {
        updateAdminAction(user, 'admin')
    }
    const handleMakeUser = (user) => {
        updateAdminAction(user, 'user')
    }

    return (
        <div>
            <div>
                <label className="input">
                    <Search size={16} />
                    <input onChange={(e) => setSearch(e.target.value)} type="search" className="grow" placeholder="Search" />
                </label>
            </div>
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
                            {/* <th>Others Actions</th> */}
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
                                                <img className="w-10 h-10 object-cover rounded-lg" src={user.photoURL} alt="" />
                                            </div>
                                            <div>
                                                {user.displayName}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className="flex justify-center items-center">
                                        {
                                            user.role === 'admin' ?
                                                <button onClick={() => handleMakeUser(user)} className="btn btn-square btn-error hover:bg-transparent"><ShieldX size={18} /> </button>
                                                :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-square btn-primary hover:bg-transparent"><ShieldPlus size={18} /> </button>
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
