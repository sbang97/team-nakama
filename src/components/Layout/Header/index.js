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
					<Nav className="justify-content-end nav-style" activeKey="/home">
					<Nav.Item>
						<IndexLink className="nav" to="/">Home</IndexLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink className="nav" to="/about">About</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink className="nav" to="/resources">Inspirations</NavLink>
					</Nav.Item>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
