/* eslint-disable react/prop-types */

import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ coffee }) => {
  const { name, country, image, category, _id } = coffee;
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deletes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your Chocolate has been deleted.", "success");
          });
      }
    });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} />
          </div>
        </div>
      </td>
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </td>

      <td className="px-6 py-4">{country}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4 flex gap-5">
        <Link to={`/updateCoffee/${_id}`}>
          <p className="bg-orange-100 px-2 py-2">
            <PencilIcon className="h-6 w-6 text-orange-500" />
          </p>
        </Link>
        <p
          onClick={() => handelDelete(_id)}
          className="bg-orange-100 px-2 py-2"
        >
          <XMarkIcon className="h-6 w-6 text-orange-500" />
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
