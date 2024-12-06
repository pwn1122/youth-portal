// import React from 'react'
    import React, { useState, useEffect } from 'react';


    const profiles = [
        {
            name: "Donna Yancey",
            title: "Digital Marketer",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/mentor1.jpg",
            alt: "Portrait of Donna Yancey"
        },
        {
            name: "James Amen",
            title: "UNIX, Calculus, Trigonometry",
            rating: 5.0,
            location: "Paris, France",
            image: "/img/mentor2.jpg",
            alt: "Portrait of James Amen"
        },
        {
            name: "Marvin Downey",
            title: "ASP.NET, Computer Gaming",
            rating: 5.0,
            location: "Newyork, USA",
            image: "/img/mentor3.jpg",
            alt: "Portrait of Marvin Downey"
        },
        {
            name: "Betty Hairston",
            title: "Computer Programming",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/mentor4.jpg",
            alt: "Portrait of Betty Hairston"
        },
        {
            name: "Aaron Pietrzak",
            title: "UNIX, Calculus, Trigonometry",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/mentor6.jpg",
            alt: "Portrait of Aaron Pietrzak"
        },
        {
            name: "Brian Martinez",
            title: "ASP.NET, Computer Gaming",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user7.jpg",
            alt: "Portrait of Brian Martinez"
        },
        {
            name: "Misty Lundy",
            title: "Computer Programming",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user8.jpg",
            alt: "Portrait of Misty Lundy"
        },
        {
            name: "Vern Campbell",
            title: "Digital Marketer",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user9.jpg",
            alt: "Portrait of Vern Campbell"
        },
        {
            name: "Evelyn Stafford",
            title: "ASP.NET, Computer Gaming",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user10.jpg",
            alt: "Portrait of Evelyn Stafford"
        },
        {
            name: "Christopher Carroll",
            title: "Computer Programming",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user11.jpg",
            alt: "Portrait of Christopher Carroll"
        },
        {
            name: "Donna Yancey",
            title: "Digital Marketer",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user12.jpg",
            alt: "Portrait of Donna Yancey"
        },
        {
            name: "Jose Anderson",
            title: "Digital Marketer",
            rating: 4.4,
            location: "Paris, France",
            image: "/img/user13.jpg",
            alt: "Portrait of Jose Anderson"
        }
    ];

    function ProfileCard({ profile }) {
        return (
            <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 abc">
                <img className="w-full h-[300px] object-cover" src={profile.image} alt={profile.alt} />
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
                    <p className="text-gray-600">{profile.title}</p>
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((star, index) => (
                                <i key={index} className={`fas fa-star ${index < Math.floor(profile.rating) ? '' : 'text-gray-300'}`}></i>
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600">{profile.rating}</span>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span>{profile.location}</span>
                    </div>
                </div>  
            </div>
        );
    }

    function Slider() {
        const [idx, setIdx] = useState(0);

        let arr = [];
        for(let i=idx; i <= idx+2; i++) {
            arr.push(profiles[i])
        }

        console.log(idx)

        useEffect(() => {
            let id = setInterval(() => {
                setIdx(prev => (prev+3)%profiles.length);
            }, 1500)

            return () => {
                clearInterval(id)
            }
        }, [])
        
        return (
            <div className="flex flex-wrap  justify-center">
                {arr.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        );
    }

export default Slider
