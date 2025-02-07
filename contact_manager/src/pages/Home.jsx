import React, { useEffect, useState } from "react";
import menuIcon from "../assets/menu.png";
import { deleteposts, getcontacts } from "../apis/postapi";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [apis, setapis] = useState();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  async function getdata() {
    try {
      const api = await getcontacts();
      console.log(api);
      setapis(api.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
    //  get data is used for indirectly fetching the data
  }, []);

  //  for deleting task function
  const handledelete = async (id) => {
    try {
      const res = await deleteposts(id);
      console.log(res);
      const newdata = apis.filter((curr) => {
        return curr.id !== id;
      });
      setapis(newdata);
    } catch (error) {
      console.log(error);
    }
  };
  //  handling the editing of items
  const handleupdates = (id) => {
    navigate(`/update/${id}`);
  };

  // Filter contacts based on search query
  const filteredContacts = apis?.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white w-full h-full p-4">
      <div className="max-h-[calc(100vh-2rem)] overflow-y-auto overflow-x-auto rounded-lg shadow">
        <table className="w-full text-lg">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b">
              <th
                colSpan="4"
                className="text-2xl text-left p-7 emilys-candy-regular"
              >
                Contacts
              </th>
            </tr>
            <tr className="bg-gray-50 ">
              <th className="text-sm text-left pl-16 py-3 font-medium">Name</th>
              <th className="text-sm text-left pl-16 py-3 font-medium">
                Email
              </th>
              <th className="text-sm text-left pl-16 py-3  font-medium row-span-2">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts?.map((curr, index) => (
              <tr
                key={index}
                className="hover:bg-amber-200 transition-all duration-300"
              >
                <td className="pl-16 py-4">{curr.name}</td>
                <td className="pl-16 py-4">{curr.email}</td>
                <td className="pl-16 py-4 flex gap-5">
                  {curr.phone}
                  <div className="dropdown dropdown-end ">
                    <button tabIndex={0} className="btn btn-ghost btn-sm p-1">
                      <img
                        src={menuIcon}
                        alt="Menu options"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <button
                          className="btn bg-white btn-sm hover:bg-slate-100 border-0 text-black"
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                        >
                          Delete item
                        </button>
                        <dialog
                          id="my_modal_5"
                          className="modal modal-middle sm:modal-middle "
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div className="modal-box bg-white">
                            <h3 className="font-bold text-lg">Warning !</h3>
                            <p className="py-4">
                              Are you Sure You want to Delete this Contact
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                <button
                                  className="btn"
                                  onClick={() => handledelete(curr.id)}
                                >
                                  Confirm
                                </button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </li>
                      <li>
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => handleupdates(curr.id)}
                        >
                          Edit item
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
