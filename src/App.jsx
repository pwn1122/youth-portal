import React from "react";
import Navbar from "./Components/Navbar";
import Main from './Components/Main'
import Mentor from './Components/Mentor'
import Slider from './Components/Slider'
import Path from './Components/Path'
import Riview from './Components/Riview'
import Blog from './Components/Blog'
import Carrer from './Components/Carrer'
import City from './Components/City'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import "./index.css"

function App() {
  return (
    <div>
    <Navbar/>
    <header className="relative bg-cover bg-center h-[90vh]">
        <img
            src="https://mentoring.dreamstechnologies.com/html/template/assets/img/banner-img.jpg"
            alt="Banner image showing a group of diverse young people engaged in a mentorship program"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-60 relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold">
                Youth Mentorship <span className="text-blue-500">Program</span>
            </h1>
            <p className="mt-4 text-xl">
                Welcome to the Youth Mentorship Program
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                    <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Search Location" id="in"
                        className=" input outline-none w-[130px]"
                    />
                </div>
                <div className="flex items-center bg-white rounded-full shadow-md px-4">
                    <i className="fas fa-search text-gray-500 mr-2"></i>
                    <input
                        type="text"
                        placeholder="Search School, Online educational centers," id="out"
                        className="outline-none w-[350px]"
                    />
                </div>
                <button className="bg-blue-500 text-white rounded-full p-3 w-20">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    </header>
    <Main/>
    <Mentor/>
    <Slider/>
    <Path/>
    <Riview/>
    <Blog/>
    <Carrer/>
    <City/>
    <Experience/>
    <Footer/>
</div>
  );
}

export default App;
