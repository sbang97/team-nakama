import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";
import { IndexLink } from "react-router";
import NavLink from "../NavLink";
export default class Header extends Component {
	render() {
		return (
			<div className="header-div">
				<Navbar fixed="top">
					<Nav className="justify-content-end" activeKey="/home">
					<Nav.Item>
					<IndexLink to="/">Home</IndexLink>
					</Nav.Item>
					<Nav.Item>
					<NavLink to="/about">About</NavLink>
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
