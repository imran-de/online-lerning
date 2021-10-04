import React, { useEffect, useState } from 'react';
import CourseItem from '../CourseItem/CourseItem';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('fakeCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <main>
            <div className='container'>
                {
                    courses.map(course => <CourseItem key={course.id} course={course}></CourseItem>)
                }
            </div>
        </main>
    );
};

export default Services;