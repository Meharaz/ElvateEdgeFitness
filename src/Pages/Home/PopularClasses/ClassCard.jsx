import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const ClassCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const { photo, category, name, description, enrolledStudents, instructor, duration, fee, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const orderClass = {classId: _id, name,  fee, email: user.email, photo}
            fetch('https://elevate-edge-fitness-server.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderClass)
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} has been added to cart`,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please log in to enroll the session?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }




    return (
        <div className="card w-96 bg-base-100 shadow-green-400 shadow-md">
            <div className="card-body">
                <h2 className="card-title text-green-400 text-center">{name}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end my-2">
                    <div >
                        <div className="badge badge-outline">{enrolledStudents} Students</div>
                        <div className="badge badge-outline mx-2">Instructor: {instructor}</div>
                        <div className="badge badge-outline "> {duration}</div>
                    </div>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">${fee} </span>
                        <button className="btn btn-sm btn-outline btn-warning"
                        onClick={()=>handleAddToCart(item)}
                        >Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;