import React, { Component } from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact-form">
                <h1 className="contact-title">Contact Us</h1>
                <Form>
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
            </div>
		);
	}
}