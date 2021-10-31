import React from 'react';
import './Trip.css';



const Trip = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-success">It’s time to plan your next trip.</h1>
            <h4>Take in the beauty of it all – wild rivers, scenic bikeways, mountain vistas, abundant farmlands – and show your love for the people who make this place so special.</h4>
            <div className="trip-section mt-5">
                <div className="trip-img">
                    <div className="overly">
                        <h3>OUR HIKES</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                </div>
                <div className="trip-img">
                    <div className="overly">
                        <h3>BICYCLING</h3>
                    </div>
                    <img src="https://media.istockphoto.com/photos/two-professional-male-cyclists-riding-their-racing-bicycles-in-the-picture-id1303246662?b=1&k=20&m=1303246662&s=170667a&w=0&h=mKFt2aV7_FQQFP8OJrL2-cWIRddbo_f6FXEQdf_ZHv8=" alt="" />
                </div>
                <div className="trip-img">
                    <div className="overly">
                        <h3>WATERFALLS</h3>
                    </div>
                    <img src="https://www.santabanta.com/images/wallpapers/creative/spectacular-view-of-an-interesting-waterfall-1024-768-0.jpg" alt="" />
                </div>
                <div className="trip-img">
                    <div className="overly">
                        <h3>HISTORIC SITES & TRAIL</h3>
                    </div>
                    <img src="https://wallpaperaccess.com/full/651709.jpg" alt="" />
                </div>
                <div className="trip-img">
                    <div className="overly">
                        <h3>PLACES TO STAY</h3>
                    </div>
                    <img src="https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1489172031076-1W2PHDT9QEUL3F1E0QBR/image-asset.jpeg" alt="" />
                </div>
                <div className="trip-img">
                    <div className="overly">
                        <h3>FOOD TRAILS</h3>
                    </div>
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Trip;