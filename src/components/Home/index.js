import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import background from './img/background.jpg';
import celeste from '../Home/img/celeste.png';
import earthbound from '../Home/img/earthbound_vc.0.jpg';
import hyper from '../Home/img/hyper light drifter.jpg';
import limbo from '../Home/img/limbo.jpg';
import Contact from '../Contact';
import Screenshots from '../Screenshots';
import "./style.css";

export default class Home extends Component {
	render() {
		return (
			<div>
			<h1 className="landing-title">Nevermind</h1>
				<Carousel>
					<Carousel.Item>
						<img
						className="d-block w-100"
						src={earthbound}
						alt="First slide"
						/>
						<Carousel.Caption>
						</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src={limbo}
							alt="Second slide"
							/>

							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src={hyper}
							alt="Third slide"
							/>

							<Carousel.Caption>
							</Carousel.Caption>
						</Carousel.Item>
				</Carousel>
				<Screenshots/>
				<Contact/>
			</div>
		);
	}
}
