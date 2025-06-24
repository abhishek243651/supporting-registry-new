import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import { columnName, arrayIndex } from '../utils/constants'
import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function UserCreation() {
    const navigate = useNavigate()
    const [searchtxt, setSearchtxt] = useState('')
    const [userData, setUserData] = useState([])

    const fetchUsers = async () => {
        const res = await fetch("https://dummyjson.com/users");
        const result = await res.json()
        setUserData(result.users)
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    const filteredData = userData.filter(user => user.firstName.toLowerCase().includes(searchtxt.toLowerCase()))

    const handleChange = (e) => {
        setSearchtxt(e.target.value)
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?")
        if (!confirmDelete) return;
        try {
            const res = await fetch(`https://dummyjson.com/users/${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                const updatedUser = userData.filter(user => user.id !== id)
                setUserData(updatedUser)
            } else {
                console.error("Failed to delete user from server");
            }
        } catch (error) {
            console.log('Someting went wrong', error)
        }
    };

    return (
        <div className="p-4">
            <h3 className="border-bottom pb-2 mb-4">User Creation</h3>
            <div className='d-flex flex-wrap gap-2 align-items-center'>
                <div><Dropdown /></div>
                <div><Dropdown /></div>
                <div><Dropdown /></div>
                <div>
                    <div><IoSearchOutline /></div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Search'
                            style={{ minWidth: '200px' }}
                            onChange={(e) => handleChange(e)}
                            value={searchtxt}
                        />
                    </div>
                </div>
                <div>
                    <button type='button' className="btn btn-outline-secondary" style={{ minWidth: '200px' }} onClick={() => navigate('/dashboard/users')}><IoIosAddCircleOutline /> Add User</button>
                </div>
            </div>
            <div className="mt-3">
                <div className="table-responsive">
                    <table className="table w-100 text-center align-middle">
                        <thead >
                            <tr>
                                {columnName.map((item, index) => (
                                    <th key={index} scope="col" style={{ width: `${100 / columnName.length}%` }}>
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((item, index) => (
                                    <>
                                        <tr key={arrayIndex(item, index)}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.role}</td>
                                            <td>{item.username}</td>
                                            <td>
                                                <span className="me-2 text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)}>
                                                    <CiTrash />
                                                </span>
                                                <span className="text-primary" style={{ cursor: 'pointer' }}>
                                                    <FaRegEdit />
                                                </span>
                                            </td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserCreation