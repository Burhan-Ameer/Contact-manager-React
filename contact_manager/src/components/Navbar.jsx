import React, { useContext, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isopen, setisopen } = useContext(ToggleContext);
  const [search, setSearch] = useState("");
   const navigate = useNavigate();

const handleMenu = () => {
    setisopen(!isopen);
  };

const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate(`/?search=${e.target.value}`);
  };

const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };

  return (
    <div className="navbar bg-amber-100 w-full">
      <div className="flex-1 w-1/3 gap-4">
        <button 
          className="p-2 rounded-full active:bg-amber-50 duration-100" 
          onClick={handleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        <div className="flex justify-center gap-2 items-center">
          <span className="emilys-candy-regular text-lg text-gray-500">Contact Manager</span>
        </div>

        <div className="flex gap-2 w-3/4 justify-center items-center bg-white rounded-lg p-2">
          <div className="p-2" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56Z" />
            </svg>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search contacts..."
              className="w-full p-2 outline-none bg-white rounded-lg focus:ring-2 focus:ring-amber-200"
              aria-label="Search contacts"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
