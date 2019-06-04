import React, { Component } from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact-form last-page opaque px-5">
								<div className="d-flex">
									<div><img src="https://tinyurl.com/y3a57cr9" id="mail" alt="mail icon"/></div>
									<div><h1 className="contact-title">Contact Us</h1></div>
								</div>

                <Form id="contact-form">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Edward" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Edward@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                </Form>
								<button type="submit" form="contact-form" value="Submit">Submit</button>
            </div>
		);
	}
}
