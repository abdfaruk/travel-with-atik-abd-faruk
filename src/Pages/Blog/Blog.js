import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className="margin-top container">
            <h1 className="mb-5 blog-title">My Tour Blog</h1>
            
            <div className="mb-3">
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/images1/Travel-wallpapers-images-android-savers-screen-screensavers-nepal-village-gandaki-annapurna-range.jpg" />
                        <Card.Body>
                        <Card.Title>Nepal Travel Blog</Card.Title>
                        <Card.Text>
                        My Nepal travel blog will help you in visiting Nepal to trek, to climb, to see the cultural sites and places of interest in Nepal, or just to hang out in Kathmandu or Pokhara. It’s also about first-hand experiences of Nepal as trekkers, tourists, and travel bloggers, as singles, couples, and later as a family with kids. We love Nepal, it’s a fabulous destination, but not an easy one. We’ve seen Nepal before and after the earthquake, we were there during the aftershocks and power cuts, so we can give you a realistic idea of what to expect. We were there back in 2001 as well as recently for more treks including the Everest Base Camp trek and Annapurna Circuit.  We added more unusual destinations in Nepal, Lumbini, Nagarkot, Chitwan, and Bhaktapur, to give you up-to-date useful information on what to see and do in Nepal.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://wallpapercave.com/wp/wp6191774.jpg" />
                        <Card.Body>
                        <Card.Title>DARJEELING TRIP PLAN</Card.Title>
                        <Card.Text>
                        Darjeeling, the quaint hill station located in the northern part of West Bengal is undoubtedly one of our favourite destinations of all times. To be honest, we can never get enough of Darjeeling. A land of breathtaking beauty surrounded by rolling green tea plantations along with the majestic Kanchenjunga ranges towering above the skyline has earned it the moniker of Queen of Hills.
                        The eternal beauty and the quaint Victorian charm of the place are enough to lure travellers and tourists alike. And the cherry on the top is the adorable Darjeeling toy train that whistles its way through the mountains. Which other hill stations have so many beauties rolled in one!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/79/1e/b0/791eb025da34cc00fce031da9fb58502.jpg" />
                        <Card.Body>
                        <Card.Title>A Complete Travel Guide To Hong Kong's Culture, Urban Exploration And Hiking!</Card.Title>
                        <Card.Text>
                        Hong Kong is possibly one of the most crowded city I have ever visited. Densely occupying the island are countless skyscrapers, interesting cultural spots, and miraculously pockets of nature worth exploring. Here is a complete travel guide and 5 days itinerary for exploring Hong Kong. We will take it slow and explore both the city and nature Hong Kong has to offer. Let's begin, shall we?
                        Looking from the outside, Hong Kong may seem like a regular densely populated city but there is so much more to this city than you would think. I should know, I made the mistake of not visiting Hong Kong earlier with the same notion.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/singapore-skyline-at-night-picture-id480288761?b=1&k=20&m=480288761&s=170667a&w=0&h=dZyS3P2dr2nklhqhjHCgslys8lX854maGD9ofnxPwms=" />
                        <Card.Body>
                        <Card.Title>Singapore Travel Guide (2021)</Card.Title>
                        <Card.Text>
                        On a previous trip to Singapore, Ren and I were on the MRT en route to Little India from Changi, when I overheard this conversation between two young travelers:“Singapore is a lot like Japan”, one friend said to the other, “but you can talk to people here.”
                        They sounded European and from that, it was clear that the guy talking had been to Singapore before while his friend was here on his first ever visit
                        I get what he was trying to say. He meant that Singapore is similar to Japan in its hyper modern-ness. They’re both clean with citizens known for being disciplined and orderly, but more Singaporeans are proficient in English so there’s less of a language barrier here.
                        I agree with him on both points, but the more I visit Singapore, the more I realize that there’s so much more to this city than what you see on the surface.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>






        </div>
    );
};

export default Blog;