// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffee=useLoaderData()
    const { name, supplier, quantity, category, chef, photoUrl, _id } = coffee
     const handleUpdateCoffee = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photoUrl = form.photoUrl.value;
            const updatedCoffee={name, supplier, quantity, category, chef, details, taste, photoUrl}
            console.log(updatedCoffee)
            //send data to the server
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updatedCoffee)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    
        }
    return (
        <div>
        <div>
            <button>Back TO Home</button>
        </div>
        <div className='bg-[#F4F3F0]'>

            <form className="card-body" onSubmit={handleUpdateCoffee}>
                <h1 className='text-[#374151] text-center text-4xl font-bold'>Update existing Coffee</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name='name' 
                            defaultValue={name}
                            placeholder="Enter coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text"
                            name='quantity' placeholder="Enter coffee quantity"
                            defaultValue={quantity}
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text"
                            name='chef'
                            defaultValue={chef} placeholder="Enter coffee Chef" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text"
                            name='supplier'
                            defaultValue={supplier}
                            placeholder="Enter coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text"
                            name='taste'
                            placeholder="Enter coffee Taste " 
                            
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text"
                            name='category'
                            defaultValue={category}
                            placeholder="Enter coffee Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text"
                            name='details'
                      
                            placeholder="Enter coffee details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text"
                        name='photoUrl'
                        defaultValue={photoUrl}
                        placeholder="Enter Photo url" className="input input-bordered" required />
                </div>
                <input type="submit" value="Update Coffee" className='btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C]' />
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;