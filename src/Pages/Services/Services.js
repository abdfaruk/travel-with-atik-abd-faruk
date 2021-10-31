import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://howling-skeleton-40428.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className="mt-5 container">
            <h1 className="text-success margin-top">YOU CAN TRAVEL WITH ME TO MANY PLACES IN THE WORLD.</h1>
                <h5 className="container mb-4">
                I travel to different parts of the world, you can be my travel companion if you want. It can be an experience and many colorful tours</h5>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;