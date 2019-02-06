import React, { Component } from "react";
import classnames from "classnames";
import logo from "../logo.svg";
import { IndexLink } from "react-router";
import NavLink from "../NavLink";
import "./style.css";

export default class Header extends Component {
	render() {
		return(
			<header className={classnames("Header", this.props.className)}>
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Youth Education on Mental Illness</h2>
				</div>
				<nav>
					<ul>
						<li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
						<li><NavLink to="/about">about</NavLink></li>
					</ul>
				</nav>
			</header>
		);
	}
}
