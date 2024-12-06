import React from 'react'

function Blog() {
  return (
    <div className=" py-[5vh]">
      <div className="container mx-auto p-6 w-[80vw]">
                    <div className="text-center mb-8">
                        <h2 className="text-blue-600 font-bold">IMPORTANT</h2>
                        <h1 className="text-4xl font-bold text-gray-800">Blogs & News</h1>
                        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden abc">
                            <img src="/img/blog-1.jpg" alt="Person working on a computer" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-gray-700 font-semibold">Tyrone Roberts</h3>
                                    <span className="text-gray-500 text-sm"><i className="far fa-clock"></i> 4 Dec 2019</span>
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 mb-2">What is Lorem Ipsum? Lorem Ipsum is simply</h2>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden abc">
                            <img src="/img/blog2.jpg" alt="Editing video on a computer" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-gray-700 font-semibold">Brittany Garcia</h3>
                                    <span className="text-gray-500 text-sm"><i className="far fa-clock"></i> 3 Dec 2019</span>
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 mb-2">Contrary to popular belief, Lorem Ipsum is</h2>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden abc">
                            <img src="/img/blog3.jpg" alt="Group of people discussing" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-gray-700 font-semibold">William Lawrence</h3>
                                    <span className="text-gray-500 text-sm"><i className="far fa-clock"></i> 2 Dec 2019</span>
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 mb-2">The standard Lorem Ipsum passage, used</h2>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>

                 
                </div>
    </div>
  )
}

export default Blog
