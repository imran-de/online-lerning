import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { singleContext } from '../../App';


const SingleCourse = () => {
    //context data 
    const courses = useContext(singleContext)
    //for collect url dynamic param value
    const { id } = useParams()
    // match url id and fakedb courses object to render UI
    const findMatch = courses.find(single => parseInt(id) === single.id);
    // destruture match course
    const { imgUrl, institute, title, rating, totalRate, lebel, price, description } = findMatch;
    return (
        <div>
            <section className='container my-5'>
                <img src={imgUrl} alt="" />
                <h1 className='text-decoration-underline'>{title}</h1>
                <h6>Offer by: {institute}</h6>
                <p>Rating: {rating}</p>
                <p>Total Enrolled: {totalRate} Students</p>
                <h5>Course Fee: ${price}</h5>
                <p><strong>Level:</strong> {lebel}</p>
                <p>{description}</p>
            </section>
        </div>
    );
};

export default SingleCourse;