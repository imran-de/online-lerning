import React from 'react';

const ServiceCard = (props) => {
    const { title, imgUrl, price, description } = props.service
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={imgUrl} className="h-25" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p><strong>Course Fee: ${price}</strong></p>
                        <p className="card-text">{description.substring(0, 150)} ...</p>
                        <button className='btn btn-outline-info'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;