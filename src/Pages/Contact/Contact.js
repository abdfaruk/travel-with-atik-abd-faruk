import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css';

const Contact = () => {
    const history = useHistory();
    const messageBtn = () =>{
        history.push('/message')
    }
    return (
        <div className="contact-body margin-top">
            <h1 className="contact-title">Contact With Me</h1>

            <div className="partition ">
                <div className="part-one">
                    <img src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000__480.jpg" alt="" />
                </div>


                <div className="part-two">
                    <div className="contact-details">
                        <h3>Address</h3>
                        <h5>Park More, Rangpur, Bangladesh.</h5>
                        <h3>Tel:</h3>
                        <h5>1 (855) 123 780 456</h5>
                        <h5>+8801716149429</h5>
                        <h3>Email</h3>
                        <h5 className="margin-bottom">farukabdullahal9@gmail.com</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write You Want</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <button onClick={messageBtn} className="all-btn">SEND</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Contact;