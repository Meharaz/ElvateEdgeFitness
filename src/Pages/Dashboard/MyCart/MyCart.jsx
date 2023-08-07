import React from 'react';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => parseFloat(item.fee) + sum, 0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full h-full px-2'>
            <SectionTitle heading={'manage cart items'} subHeading={'my cart'} />
            <div className='uppercase flex justify-around'>
                <h1 className="text-3xl">Total Items: {cart.length}</h1>
                <h1 className="text-3xl">Total Price: $ {total}</h1>
                <Link to='/dashboard/paymentHistory'>
                <button className="btn btn-warning btn-sm">Pay</button>
                </Link>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        ${parseFloat(item.fee)}
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-ghost btn-xs"
                                        >
                                            Remove item
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;