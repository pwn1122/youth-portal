import React from 'react'

function Footer() {
  return (
    <div>
      
      <footer className="bg-gray-100 py-10">
                    <div className="container mx-auto px-4 w-[80vw]">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <img src="https://mentoring.dreamstechnologies.com/html/template/assets/img/logo.png" alt="Mentoring Logo" className="mr-2 h-10 w-40"/>

                                </div>
                                
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-dribbble"></i></a>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">For Mentee</h3>
                                <ul className="text-gray-600">
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Search Mentors</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Login</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Register</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Booking</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Mentee Dashboard</a></li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">For Mentors</h3>
                                <ul className="text-gray-600">
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Appointments</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Chat</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Login</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Register</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-gray-800">Mentor Dashboard</a></li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/4">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>
                                <ul className="text-gray-600">
                                    <li className="mb-4 flex items-start">
                                        <i className="fas fa-map-marker-alt text-blue-900 mr-2"></i>
                                        <span>3556 Beech Street, San Francisco, California, CA 94108</span>
                                    </li>
                                    <li className="mb-4 flex items-start">
                                        <i className="fas fa-phone-alt text-blue-900 mr-2"></i>
                                        <span>+1 315 369 5943</span>
                                    </li>
                                    <li className="mb-4 flex items-start">
                                        <i className="fas fa-envelope text-blue-900 mr-2"></i>
                                        <span>mentoring@example.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center text-gray-600 mt-8">
                            © 2023 Mentoring. All rights reserved.
                        </div>
                    </div>
                </footer>

    </div>
  )
}

export default Footer
