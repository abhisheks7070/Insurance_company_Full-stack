import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactsList = () => {
    const [contacts, setContacts] = useState([]);
    const [statusMessage, setStatusMessage] = useState('');


    const fetchContacts = async () => {
        try {
            const response = await axios.get('https://ps-backend-d5jt.onrender.com/');
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://ps-backend-d5jt.onrender.com/');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    },);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://ps-backend-d5jt.onrender.com/${id}`);
            setStatusMessage('Contact deleted successfully!');
            fetchContacts(); // Fetch updated contacts
        } catch (error) {
            console.error('Error deleting contact:', error);
            setStatusMessage('An error occurred. Please try again.');
        }
    };

    return (
        <>
            {/* Display Contacts */}
            <div className="mx-auto  ">
                <h3 className="m-auto p-4 text-center text-4xl font-bold bg-slate-500">Enquiries</h3>
                <ul className="mt-4 gap-1 flex flex-col-reverse items-center">
                    {contacts.map((contact) => (
                        <li key={contact._id} className="w-[90vw] mx-10 rounded-xl border-solid border-slate-500 border-2 bg-slate-50 p-4 shadow flex flex-col md:flex-row justify-between md:items-center items-start">
                            <div>
                                <p className="font-bold">{contact.name}</p>
                                <p>{(contact.createdAt).slice(0,10)}</p>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                                <p>{contact.message}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(contact._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ContactsList;
