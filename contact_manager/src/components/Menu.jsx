import React, { useContext } from "react";
import { ToggleContext } from "./ToggleContext";
import { NavLink  } from "react-router-dom";



const Menu = () => {
  const { isopen } = useContext(ToggleContext);

  return (
    <div className={`bg-amber-100 transition-all duration-300  ${isopen ? "w-64":"w-0"} h-screen overflow-hidden `}>
      {/* create button */}
    
<div className=" w-full flex justify-center pt-11">

<NavLink to="/create" className="btn bg-black text-white">Create Contact</NavLink>
    </div>
      {/* nav list  */}
      <ul className="flex  flex-col justify-end p-4 gap-4 text-xs">
        <NavLink to="/"
         className={({isActive})=>`${isActive?"bg-amber-200 border-2 border-amber-600":"bg-none"} p-2 rounded-full flex items-center gap-2`}>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fffff"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </div>
          Contacts
          {/* for total number of contacts */}
        </NavLink>
        <NavLink to="mails" className={({isActive})=>`${isActive?"bg-amber-200 border-2 border-amber-600":"bg-none"} p-2 rounded-full flex items-center gap-2`}>
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          </div>
          Mails
        </NavLink>
       
      </ul>
    </div>
  );
};

export default Menu;
