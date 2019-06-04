import React, { Component } from "react";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.css';

import "./style.css";

export default class Resources extends Component {
	render() {
		return (
			<div className={classnames("Resources", this.props.className)}>
				<h1 className="header">
					Learn More About Our Inspirations
				</h1>
        <div className="intro">
          Beware: lots of reading will follow! <br/>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3 my-5 opaque">
          <div className="p-2 bd-highlight">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6rLJaVohSRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="mx-5 p-2 bd-highlight">
            <h1 className="my-3">The Power of Community</h1>
            <p><br/>Video games are <strong>powerful</strong>:
                Some of the most passionate communities in the world form around video games.</p>
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
                Celeste delicately introduces themes about mental health. Its emphasis on taking care of yourself and the complex interactions introduced with other characters
                makes the player evaluate realistic scenarios. The graphics, music, and
                unique gameplay tackles mental illness in a way that flows smoothly with a masterful story.
              </p>
            </div>
            <div className="bd-highlight box-art">
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/504230/header.jpg?t=1518176159" height="260" width="560"/>
            </div>
          </div>
          <div className="d-flex flex-row bd-highlight">
            <div className="pb-2 bd-highlight box-art">
              <img src="https://lambda.sx/XPH.png" height="260" width="560"/>
            </div>
            <div className="mx-5 p-2 bd-highlight">
              <h1>Undertale</h1>
              <p className="description mt-3">
                Undertale makes the user think about their actions and their consequences. Unlike most games, combat is optional. Players are given the option
                to talk to them, or take character-specific actions. Albeit a graphically-simple game, the gameplay is far from that.
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
