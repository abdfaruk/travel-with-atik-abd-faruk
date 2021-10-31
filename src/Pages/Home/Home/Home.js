import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="margin-top">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://scontent.fdac86-1.fna.fbcdn.net/v/t1.6435-9/118682378_2113864722091220_5226674667731811509_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEN-KwWmHIka6uHQES-5_8ANx-XEygC03o3H5cTKALTehCjgoVh_9KA-gLOE4MvTZrrWn32oyHpDi8RrHC3AzyV&_nc_ohc=THURrVhjXaMAX9X89Tf&tn=XRt9aomaQOzMQp47&_nc_ht=scontent.fdac86-1.fna&oh=13a20b7777c0625fef17f0e3ab0019d7&oe=619014AB"
                    alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-white">A BACKYARD FULL OF <br /> OUTDOOR ADVENTURE</h1>
                    <p className="text-white">A new hiking path through Slovenia’s Julian Alps offers the pleasures of adventure and valleys rather than high peaks. It’s a worthwhile trade off.</p>
                    <Link to="/places"><button className="btn btn-secondary">TAKE ADVENTURES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-white">A BACKYARD FULL OF <br /> OUTDOOR ADVENTURE</h1>
                    <p className="text-white">A new hiking path through Slovenia’s Julian Alps offers the pleasures of adventure and valleys rather than high peaks. It’s a worthwhile trade off.</p>
                    <Link to="/places"><button className="btn btn-secondary">TAKE ADVENTURES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carousel-img"
                    src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                    <h1 className="text-white">A BACKYARD FULL OF <br /> OUTDOOR ADVENTURE</h1>
                    <p className="text-white">A new hiking path through Slovenia’s Julian Alps offers the pleasures of adventure and valleys rather than high peaks. It’s a worthwhile trade off.</p>
                    <Link to="/places"><button className="btn btn-secondary">TAKE ADVENTURES</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;