import React from 'react'

function City() {
  return (
    <div>
       <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 w-[80vw]">
                    <div className="text-center mb-8">
                        <h2 className="text-blue-600 text-sm font-semibold">POPULAR LOCATIONS</h2>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Find The Mentors Near You</h1>
                        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/paris.jpg" alt="Eiffel Tower in Paris, France" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4 ">
                                <h3 className="text-lg font-semibold text-gray-800">Paris, France</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 14 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 24 Courses
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/london.jpg" alt="Building in London, England" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">London, England</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 17 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 20 Courses
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/mumbai.jpg" alt="Building in Mumbai, India" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Mumbai, India</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 18 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 22 Courses
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/italy.jpg" alt="" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Italy, Vienna</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 12 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 19 Courses
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/elopo.jpg" alt="Building in Mumbai, India" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Elpo, Mexico</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 22 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 18 Courses
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 abc">
                            <img src="/img/airos.jpg" alt="Building in Mumbai, India" className="rounded-t-lg w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Buenos Aires, Argentina</h3>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <i className="fas fa-user mr-2"></i> 16 Mentors
                                    <i className="fas fa-book ml-4 mr-2"></i> 21 Courses
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
    </div>
  )
}

export default City
