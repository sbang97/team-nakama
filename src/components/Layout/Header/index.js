import React, { Component } from "react";
import classnames from "classnames";
import logo from "../logo.svg";
import { IndexLink } from "react-router";
import NavLink from "../NavLink";
import Nav from 'react-bootstrap/Nav';
import "./style.css";

export default class Header extends Component {
	render() {
		return (
			<Nav className="justify-content-end" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="/resources">Learn More</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
}
