import { PlusIcon } from "@heroicons/react/24/solid";
import { Link, useLoaderData } from "react-router-dom";
import TableRow from "./component/TableRow";

const App = () => {
  const loadedCoffeeFromDB = useLoaderData()
  return (
    <div>
      <h1 className="text-5xl text-center mt-5 bg-yellow-800 text-white font-bold py-3 w-6/12 mx-auto rounded-lg">
        Chocolate Management System
      </h1>
      <div className="container mx-auto mt-16">
        <Link to={`/addChocolate`}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-between items-center">
              <span>
                {" "}
                <PlusIcon className="h-6 w-6 text-black " />
              </span>{" "}
              Add new Chocolate
            </span>
          </button>
        </Link>
      </div>
      <div className="container mx-auto mt-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-orange-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Country/Factory
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                loadedCoffeeFromDB?.map(coffee => <TableRow key={coffee._id} coffee={coffee}></TableRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
