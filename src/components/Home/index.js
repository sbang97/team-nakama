import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import background from './img/background.jpg';
import home from '../Home/img/home.png';
import intro from '../Home/img/intro.png';
import lake from '../Home/img/lake.png';
import Contact from '../Contact';
import Screenshots from '../Screenshots';
import UserTests from '../UserTests'
import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div>
			<div className="page">
				<h1 className="landing-title">Welcome to <strong>Nevermind</strong></h1>
					<Carousel>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src={intro}
							alt="First slide"
							/>
							<Carousel.Caption>
								{/* <p>with a full week ahead of him. Edward is determined to do everything that he can to complete everything he needs to. As the week continues blah blah blah blah blah blah blajh blah blah blah blah</p> */}
							</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={lake}
								alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src={home}
								alt="Third slide"
								/>
							</Carousel.Item>
					</Carousel>
					<p className="centered">Join Edward as he traverses his innermost thoughts and navigates stress</p>
				</div>
				<br/>
				<UserTests/>
				<Contact/>
			</div>
		);
	}
}
