import React, {useState , useEffect} from 'react'


function Experience() {

    const [mentors, setMentors] = useState(0);
    const [clients, setClients] = useState(0);
    const [appointments, setAppointments] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const interval = 50; // Interval in milliseconds
        const targetMentors = 1500;
        const targetClients = 600;
        const targetAppointments = 124;
        const targetSatisfaction = 100;

        const incrementMentors = targetMentors / (1000 / interval);
        const incrementClients = targetClients / (1000 / interval);
        const incrementAppointments = targetAppointments / (1000 / interval);
        const incrementSatisfaction = targetSatisfaction / (1000 / interval);

        const timer = setInterval(() => {
            setMentors(prev => Math.min(prev + incrementMentors, targetMentors));
            setClients(prev => Math.min(prev + incrementClients, targetClients));
            setAppointments(prev => Math.min(prev + incrementAppointments, targetAppointments));
            setSatisfaction(prev => Math.min(prev + incrementSatisfaction, targetSatisfaction));
        }, interval);

        return () => clearInterval(timer);
    }, []);
  return (
    <div className="pt-[100px]">
      <div className="text-center py-[100px] px-4 sm:px-6 lg:px-8 bg-black">
                    <h2 className="text-sm font-semibold  text-blue-500">OUR ACHIEVEMENTS</h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2  text-white">Have 10 Years Of Experiences</h1>
                    <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-white">
                            <i className="fas fa-user-tie text-4xl mb-4"></i>
                            <h3 className="text-2xl sm:text-3xl font-bold">{Math.floor(mentors)}+</h3>
                            <p className="text-gray-400 mt-2">Qualified Mentors</p>
                        </div>
                        <div className="flex flex-col items-center  text-white">
                            <i className="fas fa-user-graduate text-4xl mb-4"></i>
                            <h3 className="text-2xl sm:text-3xl font-bold">{Math.floor(clients)}+</h3>
                            <p className="text-gray-400 mt-2">Happy Clients</p>
                        </div>
                        <div className="flex flex-col items-center  text-white">
                            <i className="fas fa-calendar-alt text-4xl mb-4"></i>
                            <h3 className="text-2xl sm:text-3xl font-bold">{Math.floor(appointments)}+</h3>
                            <p className="text-gray-400 mt-2">Appointments</p>
                        </div>
                        <div className="flex flex-col items-center  text-white">
                            <i className="fas fa-thumbs-up text-4xl mb-4"></i>
                            <h3 className="text-2xl sm:text-3xl font-bold">{Math.floor(satisfaction)}%</h3>
                            <p className="text-gray-400 mt-2">Job Satisfaction</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Experience
