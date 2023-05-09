import { useLoaderData } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const loadASingleCoffeeFromDB = useLoaderData()
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleUpdate = event =>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const country = form.country.value;
      const image = form.image.value;
      const category = selectedOption;
      const chocolate ={name, country, image, category}
      fetch(`http://localhost:5000/updateCoffees/${loadASingleCoffeeFromDB._id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(chocolate)
      })
      .then(res => res.json())
      .then(data =>{
          console.log('data', data);
      if(data.acknowledged){
          Swal.fire({
              title: 'success!',
              text: 'This Chocolate Information Update !!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
      })
    }
    return (
        <div>
      <h1 className="text-5xl text-center mt-2 bg-yellow-800 text-white font-bold py-3 w-6/12 mx-auto rounded-lg">
        Chocolate Management System
      </h1>
      <div className="container mx-auto mt-5 w-7/12">
        <Link to={`/`}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-between items-center">
              <span>
                {" "}
                <ArrowLongLeftIcon className="h-6 w-6 text-black " />
              </span>{" "}
              All Chocolates
            </span>
          </button>
        </Link>
      </div>
      <div className="container mx-auto w-7/12 bg-gray-100 px-14 py-14">
        <h3 className="text-center text-xl font-bold my-3">New Chocolates</h3>
        <p className="text-center text-lg  mb-3">
          Use the below form to create a new product
        </p>
        <div className="container mx-auto">
          <form onSubmit={handleUpdate}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={loadASingleCoffeeFromDB?.name}
                placeholder="Hot Pink Chocolate"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={loadASingleCoffeeFromDB.country}
                placeholder="Enter Country Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Chocolate Image URL
              </label>
              <input
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={loadASingleCoffeeFromDB.image}
                placeholder="Image URL"
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                Category
                </span>
              </label>
              <select className="select select-bordered"
              id="dropdown"
                value={selectedOption}
                onChange={handleSelectChange}>
                <option value="White Chocolate">White Chocolate</option>
                <option value="Milk Chocolate">Milk Chocolate</option>
                <option value="Dark Chocolate">Dark Chocolate</option>
                <option value="optiBittersweet Chocolateon4">Bittersweet Chocolate</option>
                <option value="Ruby Chocolatek">Ruby Chocolatek</option>
              </select>
            </div>
            
            <input
              className="btn btn-block mt-5"
              type="submit"
              value="Add Chocolate"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateCoffee;