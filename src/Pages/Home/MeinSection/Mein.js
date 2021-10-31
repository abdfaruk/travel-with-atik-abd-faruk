import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Soul from '../Soul/Soul';
import './Mein.css';

const Mein = () => {
    return (
        <div className="margin-top">
            <div className="container mt-5 mb-5">
                <h2>I’m Atikur Rahman Shohel, a photo-taking, food-loving, web developer. This is where I share my adventures, tips about becoming a freelancer, home renovation projects from our 1800s Victorian, tales about my jaunty pup and stories from my hometown.</h2>
                <Link to="/about"><button className="mt-3 button-2">LEARN MORE</button></Link>
            </div>
            <Soul></Soul>
            <div className="mb-5">
                <h1 className="mb-3">CURATED CONTENT</h1>
                <CardGroup>
                    <Card>
                        <Card.Img className="card-image" src="https://live-production.wcms.abc-cdn.net.au/322b36b1e1f99ff89977c7cca19280b0?impolicy=wcms_crop_resize&cropH=1125&cropW=1998&xPos=1&yPos=0&width=862&height=485" />
                    </Card>
                    <Card>
                        <Card.Img className="card-image" src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card>
                        <Card.Img className="card-image" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                    </Card>
                    <Card>
                        <Card.Img className="card-image" src="https://www.photographytips.tv/wp-content/uploads/2019/02/50-travel-photography-tips-to-ta-4.jpg" />
                    </Card>
                    <Card>
                        <Card.Img className="card-image" src="https://www.smartertravel.com/wp-content/uploads/2016/08/travel-tourist-photographer-lens-camera-sunset.jpg" />
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Mein;