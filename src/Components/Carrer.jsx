import React from 'react'

const mentors = [
    { title: "Digital Marketer", mentors: 40, img: "/img/digital.jpg" },
    { title: "Ui designer", mentors: 30, img: "img/ui.jpg" },
    { title: "IT Security", mentors: 35, img: "img/it.jpg" },
    { title: "Front-End Developer", mentors: 40, img: "img/front.jpg" },
    { title: "Web Developer", mentors: 45, img: "img/web.jpg" },
    { title: "Administrator", mentors: 30, img: "img/admin.jpg" },
    { title: "Project Manager", mentors: 40, img: "img/project.jpg" },
    { title: "PHP Developer", mentors: 50, img: "img/php.jpg" },
];

function MentorCard({ title, mentors, img }) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg abc">
            <img src={img} alt={title} className="w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h2 className="text-white text-xl font-semibold">{title}</h2>
                <p className="text-blue-300">{mentors} Mentors</p>
            </div>
        </div>
    );
}

function Carrer() {
    return (
        <div className="container mx-auto p-4 w-[80vw]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} {...mentor} />
                ))}
            </div>
        </div>
    );
}

export default Carrer