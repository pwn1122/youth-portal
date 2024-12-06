import React from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';

function Mentee() {

    const users = [
        {
            name: "Ruby Perrin",
            title: "Digital Marketer",
            location: "Florida, USA",
            feedback: 17,
            price: "$300 - $1000",
            rating: 4,
            image: "/img/user10.jpg"
        },
        {
            name: "Darren Elder",
            title: "Digital Marketer",
            location: "Newyork, USA",
            feedback: 35,
            price: "$50 - $300",
            rating: 4,
            image: "/img/mentor1.jpg"
        },
        {
            name: "Deborah Angel",
            title: "UNIX, Calculus, Trigonometry",
            location: "Georgia, USA",
            feedback: 27,
            price: "$50 - $300",
            rating: 4,
            image: "/img/mentor2.jpg"
        },
        {
            name: "Sofia Brient",
            title: "Computer Programmin",
            location: "Louisiana, USA",
            feedback: 4,
            price: "$50 - $300",
            rating: 4,
            image: "/img/mentor4.jpg"
        },
        {
            name: "Katharine Berthold",
            title: "ASP.NET, Computer Gaming",
            location: " Texas, USA",
            feedback: 52,
            price: "$50 - $300",
            rating: 4,
            image: "/img/mentor11.jpg"
        },
       
    ];
  return (
    <div>
          <Navbar/>
           
          <div className="container mx-auto p-4">
                    <nav className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-2">
                            <a href="#" className="text-gray-600">Home</a>
                            <span className="text-gray-400">/</span>
                            <a href="#" className="text-gray-600">Search</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Sort by</span>
                            <select className="border border-gray-300 rounded p-2">
                                <option>Select</option>
                                <option>Rating</option>
                                <option>Latest</option>
                                <option>Popular</option>
                                <option>Free</option>
                            </select>
                        </div>
                    </nav>
                    <h1 className="text-2xl font-bold mb-4">2245 matches found for : Mentors In Florida</h1>
                    <div className="flex flex-col lg:flex-row">
                        <aside className="w-full lg:w-1/4 p-4 bg-white rounded shadow mb-4 lg:mb-0">
                            <h2 className="text-xl font-bold mb-4">Search Filter</h2>
                            <div className="mb-4">
                                <label className="block mb-2">Select Date</label>
                                <input type="date" className="w-full border border-gray-300 rounded p-2" />
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold mb-2">Gender</h3>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="male" className="mr-2" checked />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="female" className="mr-2" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-bold mb-2">Select Courses</h3>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="digital-marketer" className="mr-2" checked />
                                    <label htmlFor="digital-marketer">Digital Marketer</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="unix" className="mr-2" checked />
                                    <label htmlFor="unix">UNIX, Calculus, Trigonometry</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="computer-programming" className="mr-2" />
                                    <label htmlFor="computer-programming">Computer Programming</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="aspnet" className="mr-2" />
                                    <label htmlFor="aspnet">ASP.NET, Computer Gaming</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="html-css" className="mr-2" />
                                    <label htmlFor="html-css">HTML, Css</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="vbnet" className="mr-2" />
                                    <label htmlFor="vbnet">VB, VB.net</label>
                                </div>
                            </div>
                            <button className="w-full bg-blue-500 text-white py-2 rounded">Search</button>
                        </aside>
                        <main className="w-full lg:w-3/4 p-4 lg:overflow-y-auto lg:h-screen">
                            {users.map((user, index) => (
                                <div key={index} className="bg-white rounded shadow p-4 mb-4 flex">
                                    <img src={user.image} alt={`Profile of ${user.name}`} className="w-24 h-24 rounded-full mr-4" />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold">{user.name}</h2>
                                        <p className="text-gray-600">{user.role}</p>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((star, i) => (
                                                <span key={i} className={i < user.rating ? "text-yellow-500" : "text-gray-300"}>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            ))}
                                            <span className="ml-2 text-gray-600">({user.feedback})</span>
                                        </div>
                                        <p className="text-gray-600"><i className="fas fa-map-marker-alt"></i> {user.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-600"><i className="fas fa-comments"></i> {user.feedback} Feedback</p>
                                        <p className="text-gray-600"><i className="fas fa-map-marker-alt"></i> {user.location}</p>
                                        <p className="text-gray-600"><i className="fas fa-dollar-sign"></i> {user.price}</p>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded">BOOK APPOINTMENT</button>
                                    </div>
                                </div>
                            ))}
                        </main>
                    </div>
                </div>
                <Footer/>
    </div>
  )
}

export default Mentee
