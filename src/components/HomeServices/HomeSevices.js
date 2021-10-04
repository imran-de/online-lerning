import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeSevices = () => {
    //declare course variable
    const [services, setServices] = useState([])
    //call api
    useEffect(() => {
        fetch('fakeCoursesForHome.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='my-5'>
            <div className="container">
                {/* title intro */}
                <h1>Start Learning with Top Courses</h1>
                <p>online courses from the world's top universities and companies.</p>
                {/* courses */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeSevices;