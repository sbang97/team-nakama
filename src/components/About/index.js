import React, { Component } from "react";
import classnames from "classnames";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import joe from './img/joe.jpg';
import simon from './img/simon.jpg';
import sunny from './img/sunny.jpg';
import kevin from './img/kevin.jpg';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class About extends Component {
	render() {
		return (
			<div className={classnames("About", this.props.className)}>
				<div className='about-section'>
					<h1 className='about-header'>
						About Us
					</h1>
					<p className='about-paragraph'>
					Despite the progression of research and advocacy for mental health conditions, it is still very evident that there is still an alarming lack of awareness in our societies. In particular, there aren’t any reputable online resources for advising those who suffer from mental issues as well as resources for advising people on how to interact with those who are suffering from mental health issues. We want to build an interactive, online resource that enables people, both those who suffer from mental health issues and those who do not, to navigate mental health issues in a way that is positive and informing.
					</p>
				</div>
				<div className='bio-section'>
					<h2 className='bio-header'>Who we are</h2>
					<CardGroup>
						<Card>
							<Card.Img variant="top" src={joe} />
							<Card.Body>
								<Card.Title>Joseph Zhang</Card.Title>
								<Card.Text>
								Hi, my name is Joseph and I’m currently a senior in the Informatics program pursuing a career in software development. I’m passionate about using my skills to bring real value to society. Mental health is something that means a lot to me personally, and I’m excited to explore how my technical skills can be used to help tackle this problem.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src={simon} />
							<Card.Body>
								<Card.Title>Simon Bang</Card.Title>
								<Card.Text>
								Hello! My name is Simon Bang. I am a senior in Informatics and am doing software engineering for my career. I love problem solving on all scales but especially real world problems that hinder people. The issue of mental health is one that strikes close to home through experiences with friends and family. I want to help solve this problem in any way I can.
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
					<CardGroup>
						<Card>
							<Card.Img variant="top" src={sunny} />
							<Card.Body>
								<Card.Title>Sunwoo Kang</Card.Title>
								<Card.Text>
								I am a senior in the Informatics program studying Human Computer Interaction. I am an aspiring project manager that hopes to bring together design and technology in a way that can impact the lives of other people. I want to use these skills and passions of mine to start making changes on the issue of mental health.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src={kevin}/>
							<Card.Body>
								<Card.Title>Kevin Xu</Card.Title>
								<Card.Text>
								Kevin Xu is a senior student in the Informatics program at the University of Washington. He is studying Human-Computer Interaction and Web Development. In his spare time, he is an instructor in digital audio production and a competitive Super Smash Bros. player.
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
			</div>
		);
	}
}
