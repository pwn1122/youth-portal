import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';

function Dashboard() {
    const users = [
        { name: "Tyrone Roberts", email: "tyroneroberts@adobe.com", date: "08 April 2020", status: "PENDING", img:"img/mentor1.jpg" },
        { name: "Julie Pennington", email: "julie@adobe.com", date: "08 April 2020", status: "PENDING",img:"img/mentor2.jpg" },
        { name: "Allen Davis", email: "allendavis@adobe.com", date: "08 April 2020", status: "PENDING" , img:"img/mentor3.jpg" },
        { name: "Patricia Manzi", email: "patriciamanzi@adobe.com", date: "08 April 2020", status: "ACCEPTED" ,img:"img/mentor4.jpg"},
        { name: "Olive Lawrence ", email: "olivelawrence@adobe.com", date: "08 April 2020", status: "ACCEPTED",img:"img/mentor6.jpg" },
        { name: "Frances Foster ", email: "frances@adobe.com", date: "08 April 2020", status: "ACCEPTED", img:"img/user7.jpg" },
        { name: "Deloris Briscoe ", email: "delorisbriscoe@adobe.com", date: "08 April 2020", status: "REJECTED" , img:"img/user8.jpg" }
       
    ];
  return (
    <div>
        <Navbar/>
      
        <div className="min-h-screen bg-gray-100 p-4">
                    <div className="mb-4">
                        <nav className="text-sm text-gray-600">
                            <a href="#" className="hover:underline">Home</a> / <span>Dashboard</span>
                        </nav>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <div className="bg-white p-4 rounded-lg shadow-md lg:w-1/4 lg:overflow-y-auto">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl text-blue-500 font-bold">JD</div>
                                <div className="mt-2 flex items-center">
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-gray-300"></i>
                                </div>
                                <h2 className="mt-2 text-xl font-semibold">Jonathan Doe</h2>
                                <p className="text-gray-500">English Literature (M.A)</p>
                                <div className="mt-4 w-full">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Complete your profiles</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-center text-blue-500">
                                    <i className="fas fa-home mr-2"></i>
                                    <a href="#" className="hover:underline">Dashboard</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-clock mr-2"></i>
                                    <a href="#" className="hover:underline">Bookings</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-hourglass-half mr-2"></i>
                                    <a href="#" className="hover:underline">Schedule Timings</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-comments mr-2"></i>
                                    <a href="#" className="hover:underline">Messages</a>
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <i className="fas fa-file-invoice mr-2"></i>
                                    <a href="#" className="hover:underline">Invoices</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 space-y-4 lg:overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="pb-2">BASIC INFO</th>
                                            <th className="pb-2">CREATED DATE</th>
                                            <th className="pb-2">TAGS</th>
                                            <th className="pb-2">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="py-2 flex items-center">
                                                    <img src={user.img} alt={`Profile of ${user.name}`} className="w-10 h-10 rounded-full mr-2"/>
                                                    <div>
                                                        <p>{user.name}</p>
                                                        <p className="text-gray-500 text-sm">{user.email}</p>
                                                    </div>
                                                </td>
                                                <td className="py-2">{user.date}</td>
                                                <td className="py-2">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'PENDING' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="py-2">
                                                    <button className="text-blue-500 hover:underline">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
      
        <Footer/>
    </div>
  )
}

export default Dashboard
