import React from 'react';

const CourseItem = (props) => {
    const { title, institute, rating, totalRate, lebel, imgUrl } = props.course;
    return (
        <article className='row border-bottom my-4'>
            <div className='d-flex align-items-center my-3'>
                <div className='me-3'>
                    <img src={imgUrl} className='img-fluid' alt="" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p><small>Offer by: {institute}</small></p>
                    <p>Rate: <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
                    <h6>Lebel: {lebel}</h6>
                </div>

            </div>

        </article>
    );
};

export default CourseItem;