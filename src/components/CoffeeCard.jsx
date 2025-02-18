import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
const CoffeeCard = ({ coffee }) => {
    const { name, supplier, quantity, category, chef, photoUrl, _id } = coffee
    const handleDelete = _id => {
        console.log(_id)

        //sweet
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                             Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                            })
                        }
                    })

            }
        });

    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full p-4">
                    <div>
                        <h2 className="card-title">Name:{name}</h2>
                        <p>Available:{quantity}</p>
                        <p>Supplier:{supplier}</p>
                        <p>Chef:{chef}</p>
                        <p>category:{category}</p>
                    </div>
                    <div className="card-actions ">
                        <div className="join join-vertical space-y-4">
                            <button className="btn bg-[#D2B48C]"><FaEye /></button>
                            <button className="btn bg-[#3C393B] "><MdModeEditOutline /></button>
                            <button onClick={() => handleDelete(_id)} className="btn text-white bg-[#EA4744]"><MdDelete cl /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;