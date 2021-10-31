import React from 'react';
import { Card } from 'react-bootstrap';
import './Soul.css';

const Soul = () => {
    return (
        <div className="mb-5">
            <Card className="bg-dark text-white">
                <Card.Img  className="soul-section-image" src="https://wallpaperaccess.com/full/4190138.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="soul-title">SASS & SOUL</Card.Title>
                    <Card.Text className="soul-text">
                    Find a balance between career, travel, family and a life you love.
                    </Card.Text>
                    <button className="button-2">INSPIRE ME</button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Soul;