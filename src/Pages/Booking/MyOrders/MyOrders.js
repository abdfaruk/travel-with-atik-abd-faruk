import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MyOrders =()=> {
    const [order, setOrder] = useState([]);
    useEffect( ()=>{
        fetch('https://howling-skeleton-40428.herokuapp.com/myOrder')
        .then(res => res.json())
        .then(result => setOrder(result))
    },[])

    const success= () =>{
        alert('WOOOW, Your booking has been submitted successfully!')
    }
    

    return (
        <div className="margin-top">
            {
                order.map(element => <div key={element._id}>

                    <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>Your Email: {element.email}</Card.Text>
                        <Card.Text>Your Address: {element.address}</Card.Text>
                        <Card.Text>Your Phone: {element.phone}</Card.Text>
                        <Card.Text>Your Booking ID: {element._id}</Card.Text>

                        <Button onClick={success} variant="primary">Confirm Booking</Button>
                    </Card.Body>
                    </Card>

                    </div>)
            }
        </div>
    );
};

export default MyOrders;