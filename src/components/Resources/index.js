import React, { Component } from "react";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.css';

import "./style.css";

export default class Resources extends Component {
	render() {
		return (
			<div className={classnames("Resources", this.props.className)}>
				<h1 className="header">
					About Nevermind
				</h1>
        <div className="intro">
          Everyone has mental health. But why don't we talk about it? <br/>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3 my-5 opaque">
          <div className="p-2 bd-highlight">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6rLJaVohSRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="mx-5 p-2 bd-highlight">
            <h1>The Power of Community</h1>
            <p>Video games are <strong>helpful</strong> and <strong>powerful</strong>.
                Communities are created from video games, designed to celebrate the game,
                pay attention to their own experience with the game and share their experiences with other players.</p>
          </div>
        </div>
        <br/>
        <div className="header">
          🧠  🎮 
        </div>
        <br/>
        <div className="opaque">
          <h1 className="subheader mb-0"> Inspirations</h1>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="mx-5 p-2 bd-highlight">
              <h1>Celeste</h1>
              <p className="description mt-3">
                We were inspired by the way Celeste delicately introduces themes about mental health. Its emphasis on taking care of yourself and the complex interactions introduced with other characters
                makes the player evaluate tradeoffs in scenarios that aren't too far off from real life. Its graphics and wide breadth of music styles also helps set the tone and create a sense of immersion in every situation. It includes
                creative minigames that tackle some very real challenges of mental illness that flow smoothly and fit perfectly with the story.
              </p>
            </div>
            <div className="p-2 bd-highlight box-art">
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/504230/header.jpg?t=1518176159" height="260" width="560"/>
            </div>
          </div>
          <div className="d-flex flex-row bd-highlight mt-5">
            <div className="p-2 bd-highlight box-art">
              <img src="https://lambda.sx/XPH.png" height="260" width="560"/>
            </div>
            <div className="mx-5 p-2 bd-highlight">
              <h1>Undertale</h1>
              <p className="description mt-3">
                Undertale is a game that makes the user seriously think about their actions and the potential ramifications of everything they do. Unlike most games in which the protagonist must fight the enemies, players are given the option
                to talk to them, or take character-specific actions. The unorthodox characters inspired us to capture the intricacies of mental health and
                try to represent them in creative and fitting ways. Albeit a relatively graphically-simple game, the simplicity does nothing to take away from the complexity of the storytelling.
              </p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
		);
	}
}
