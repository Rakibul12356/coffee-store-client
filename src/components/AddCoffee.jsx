
// eslint-disable-next-line no-unused-vars
import React from 'react';
const AddCoffee = () => {
    return (
        <div>
            <h2>This is add</h2>
            <form className="card-body">
                <div className='grid grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Enter coffee Chef" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter coffee Tate" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter coffee Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter coffee details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" placeholder="Enter Photo url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary font-ranco">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;