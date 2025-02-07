import React, { useEffect, useState } from "react";
import { createposts, getcontact, updatecontact } from "../apis/postapi";
import { useParams } from "react-router-dom";

const Create = () => {
  const [addData, setAddData] = useState({
    name: "",
    phone: "",
    email: "",
  });

//  getting the data from useparam hook which is hook use to get parameters from URLS 
const { id}=useParams()



  // Fetch existing contact data if id is provided
  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const response = await getcontact(id);
          console.log("Fetched contact data:", response.data); // Log fetched data
          setAddData({
            name:response.data.name||"",
            email:response.data.email||"",
            phone:response.data.phone||"",
          });
        } catch (error) {
          console.error("Error fetching contact:", error);
        }
      };
      fetchContact();
    }
  }, [id]);

  const handleInputChange = (e) => {
    setAddData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing contact
        const response = await updatecontact(id, addData);
        console.log("Updated contact:", response.data);
        
      } else {
        // Create new contact
        const response = await createposts(addData);
        console.log("Created contact:", response.data);
      }
      setAddData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full bg-gray-100 border-2 m-3 rounded-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                name="name"
                type="text"
                required
                value={addData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm"
                placeholder="Enter name"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                required
                value={addData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm"
                placeholder="Enter email"
              />
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                required
                value={addData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-black"
          >
            {id ? "Update Contact" : "Create Contact"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
