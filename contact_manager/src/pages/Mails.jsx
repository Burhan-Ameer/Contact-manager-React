import React, { useState, useEffect } from 'react';
import { getcontacts } from '../apis/postapi';

const Mails = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getcontacts();
        setContacts(response.data);
      } catch (error) {
        setError('Failed to fetch contacts');
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

  return (
    <div className="bg-white w-full h-full p-4">
      <div className="max-h-[calc(100vh-2rem)] overflow-y-auto overflow-x-auto rounded-lg shadow">
        <table className="w-full text-lg">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b">
              <th colSpan="3" className="text-2xl text-left p-7 emilys-candy-regular">
                Email Contacts
              </th>
            </tr>
            <tr className="bg-gray-50">
              <th className="text-sm text-left pl-16 py-3 font-medium">Name</th>
              <th className="text-sm text-left pl-16 py-3 font-medium">Email</th>
              <th className="text-sm text-left pl-16 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="hover:bg-amber-200 transition-all duration-300"
              >
                <td className="pl-16 py-4">{contact.name}</td>
                <td className="pl-16 py-4">{contact.email}</td>
                <td className="pl-16 py-4">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="btn btn-ghost btn-sm"
                  >
                    Send Email
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mails;