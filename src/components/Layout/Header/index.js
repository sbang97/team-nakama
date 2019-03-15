import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

export default class Header extends Component {
	render() {
		return (
			<div className="header-div">
				<Navbar fixed="top">
					<Nav className="justify-content-end" activeKey="/home">
					<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link href="/about">About</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link href="/resources">Learn More</Nav.Link>
					</Nav.Item>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
