import React, { Component } from 'react';

class SlideLibrary extends Component{

	constructor(props){
		super(props);
		this.state = {
			slides: [],
		}
	}

	componentDidMount(){
		console.log("slide Library Mounted");
	}

	getSlides(){
		fetch('/api/slides')
		.then(res=>res.json())
		.then(json=>{
			this.setState({
				slides: [{
					id: _slideId,
					minutes: minutes,
					seconds: seconds,
					color: slideColor,
					title: slideTitle,					
				}],

			});
		});
	}

	render(){
		return(
			<div class= "centered">
				<p> A list of slides will go here. It will read: SlideId, Slide title, Time, Color and when clicked it will update the state of our timer display to load the slide into the queue </p>
				<p> Slides: </p>

				<ul>
		          { this.state.slides.map((slide, i) => (
		            <li key={i}>
		              <span>{slides.count} </span>
		              <ul>
		              	<li>{this.state.slides.slideTitle} </li>
		              	<li>{this.state.slides.slideColor} </li>
		              	<li>{this.state.slides.minutes} </li>
		              	<li>{this.state.slides.seconds}</li>
		              </ul>
		            </li>
		          )) }
		        </ul>
			</div>
			)
	}
}

export default SlideLibrary;