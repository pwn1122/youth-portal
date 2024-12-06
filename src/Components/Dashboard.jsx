import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';

function Dashboard() {
    const mentees = [
        { name: "Tyrone Roberts", email: "tyroneroberts@adobe.com", date: "08 April 2020", status: "PENDING" },
        { name: "Julie Pennington", email: "julie@adobe.com", date: "08 April 2020", status: "PENDING" },
        { name: "Allen Davis", email: "allendavis@adobe.com", date: "08 April 2020", status: "PENDING" },
        { name: "Patricia Manzi", email: "patriciamanzi@adobe.com", date: "08 April 2020", status: "ACCEPTED" },
        { name: "Olive Lawrence ", email: "olivelawrence@adobe.com", date: "08 April 2020", status: "ACCEPTED" },
        { name: "Frances Foster ", email: "frances@adobe.com", date: "08 April 2020", status: "ACCEPTED" },
        { name: "Deloris Briscoe ", email: "delorisbriscoe@adobe.com", date: "08 April 2020", status: "REJECTED" }
       
    ];
  return (
    <div>
        <Navbar/>
      
      <div className="p-4">
                    <div className="mb-4  bg-yellow-50 p-6">
                        <nav className="text-sm text-gray-600">
                            <a href="#" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Dashboard</a>
                        </nav>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md mb-4 lg:mb-0 sticky top-0">
                            <div className="text-center mb-4">
                                <div className="w-24 h-24 rounded-full border-2 border-blue-500 mx-auto flex items-center justify-center text-2xl text-blue-500">JD</div>
                                <div className="flex justify-center mt-2">
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-gray-300"></i>
                                </div>
                                <h2 className="text-xl font-semibold mt-2">Jonathan Doe</h2>
                                <p className="text-gray-600">English Literature (M.A)</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-blue-500">Complete your profiles</p>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex items-center text-blue-500">
                                    <i className="fas fa-home mr-2"></i> Dashboard
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-clock mr-2"></i> Bookings
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-calendar-alt mr-2"></i> Schedule Timings
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-comments mr-2"></i> Messages
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-file-invoice mr-2"></i> Invoices
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-file-invoice mr-2"></i> Reviews
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-file-invoice mr-2"></i> Blog
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-file-invoice mr-2"></i> Profile
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-3/4 lg:pl-4 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
                                    <i className="fas fa-users text-2xl text-blue-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">23</h3>
                                        <p className="text-gray-600">Members</p>
                                    </div>
                                </div>
                                <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center">
                                    <i className="fas fa-calendar-check text-2xl text-yellow-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">33</h3>
                                        <p className="text-gray-600">Appointments</p>
                                    </div>
                                </div>
                                <div className="bg-pink-100 p-4 rounded-lg shadow-md flex items-center">
                                    <i className="fas fa-wallet text-2xl text-pink-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-xl font-semibold">$14</h3>
                                        <p className="text-gray-600">Total Earned</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-4">Mentee Lists</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border-b">BASIC INFO</th>
                                                <th className="py-2 px-4 border-b">CREATED DATE</th>
                                                <th className="py-2 px-4 border-b">TAGS</th>
                                                <th className="py-2 px-4 border-b">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {mentees.map((mentee, index) => (
                                                <tr key={index}>
                                                    <td className="py-2 px-4 border-b flex items-center">
                                                        <img src="img/mentor1.jpg" alt={`Profile of ${mentee.name}`} className="w-10 h-10 rounded-full mr-2" />
                                                        <div>
                                                            <p className="font-semibold">{mentee.name}</p>
                                                            <p className="text-gray-600">{mentee.email}</p>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b">{mentee.date}</td>
                                                    <td className="py-2 px-4 border-b">
                                                        <span className={`text-white text-xs font-semibold px-2 py-1 rounded ${mentee.status === 'PENDING' ? 'bg-yellow-500' : 'bg-green-500'}`}>{mentee.status}</span>
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <button className="bg-teal-100 text-teal-500 px-2 py-1 rounded">View</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
    </div>
  )
}

export default Dashboard
