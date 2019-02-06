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
					The progression of mental health awareness has pushed the topic in a space of public interest. We now understand that everybody deals with mental issues time to time and that nobody is alone in this struggle. Despite the increase of advocacy for mental health conditions, we feel that there are still very limited resources available in our day-to-day lives. Employee benefits in the workforce often don’t cover mental health related issues, and school curriculums don’t prepare children personally navigating mental health crises.   We feel that helping younger audiences build their moral identity with mental health in mind can prepare children for later obstacles of adulthood. We want to build an interactive, online resource, aimed at younger children, that both educates children on mental health and encourages children to navigate mental health issues in a way that is positive and informing.
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
