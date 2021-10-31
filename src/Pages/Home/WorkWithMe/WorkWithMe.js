import React from 'react';
import { Card } from 'react-bootstrap';
import './WorkWithMe.css';

const WorkWithMe = () => {
    return (
        <div className="mb-5">
                <Card className="bg-dark text-white">
                    <Card.Img  className="soul-section-image" src="https://activitybucket.com/wp-content/uploads/2020/02/The-Traveller-guy-1024x682.jpg" alt="Card image" />
                    <Card.ImgOverlay className="work-body">
                        <Card.Title className="work-title">WORK WITH ME</Card.Title>
                        <Card.Text className="work-text">
                        Looking for help with editorial work, <br /> influencer campaigns, digital marketing or project management? <br /> I’ve got you covered.
                        </Card.Text>
                        <button className="button-2">START HARE</button>
                    </Card.ImgOverlay>
                </Card>
            </div>
    );
};

export default WorkWithMe;