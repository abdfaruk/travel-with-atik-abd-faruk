import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://howling-skeleton-40428.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const {serviceId} = useParams();

    const selectedData = services?.find( e => e.id==serviceId)
    console.log(selectedData);
    return (
        <div className="margin-top">
            {
                selectedData?.id && <div className="dinamic-data">
                    
                    <img className="map-image" src={selectedData.img_1} alt="" />
                    <div className="d-flex">
                        <div className="mx-5">
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={selectedData.img} />
                                <Card.Body>
                                    <Card.Title>{selectedData.name}</Card.Title>
                                    <Card.Text>
                                    {selectedData.description}
                                    </Card.Text>
                                    <Link to="/booking_process">
                                        <Button variant="primary"  className="all-btn">Book In {selectedData.name}</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Booking;