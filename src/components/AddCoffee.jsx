
// eslint-disable-next-line no-unused-vars
import React from 'react';
const AddCoffee = () => {
    const handleAddCoffee = event => {
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
        const newCoffee={name, supplier, quantity, category, chef, details, taste, photoUrl}
        console.log(newCoffee)

    }
    return (

        <div>
            <div>
                <button>Back TO Home</button>
            </div>
            <div className='bg-[#F4F3F0]'>

                <form className="card-body" onSubmit={handleAddCoffee}>
                    <h1 className='text-[#374151] text-center text-4xl font-bold'>Add New Coffee</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name='name' placeholder="Enter coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text"
                                name='quantity' placeholder="Enter coffee quantity"

                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text"
                                name='chef' placeholder="Enter coffee Chef" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text"
                                name='supplier'
                                placeholder="Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text"
                                name='taste'
                                placeholder="Enter coffee Tate" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text"
                                name='category'
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
                            placeholder="Enter Photo url" className="input input-bordered" required />
                    </div>
                    <input type="submit" value="Add Coffee" className='btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C]' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;