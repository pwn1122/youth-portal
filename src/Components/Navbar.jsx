import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        <div className="flex items-center">
                            <img src="https://mentoring.dreamstechnologies.com/html/template/assets/img/logo.png" alt="Logo" className="h-10 w-40"/>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link className="text-blue-900 hover:text-blue-700" to={"/"}>Home</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/dashboard"}>Mentor</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/mentee"}>Mentee</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/blogsection"}>Blog</Link>
                            
                        </div>
                        <div className="hidden md:flex items-center space-x-2">
                            <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                            <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/regeister"}>Regeister</Link>
                            
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 focus:outline-none">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className={`md:hidden ${isOpen ? 'slide-in' : 'slide-out'}`}>
                        {isOpen && (
                            <nav className="flex flex-col items-center space-y-4 py-4">
                            <Link className="text-blue-900 hover:text-blue-700" to={"/app"}>Home</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/dashboard"}>Mentor</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/mentee"}>Mentee</Link>
                            <Link className="text-blue-900 hover:text-blue-700" to={"/blogsection"}>Blog</Link>
                            <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                            <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/regeister"}>Regeister</Link>
                            </nav>
                        )}
                    </div>
                </header>
                

  )
}

export default Navbar
