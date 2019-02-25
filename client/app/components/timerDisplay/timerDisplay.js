import React, {Component} from 'react';
import WorkoutEditor from '../Editor/WorkoutEditor';
import SlideLibrary from './slideLibrary';
import Fullscreen from "react-full-screen";
import Schedule from "../Editor/schedule";

class TimerDisplay extends Component {
	constructor(props){
		super(props);
		this.state = {
			minutes: 0,
			seconds: 0,
			totalSec: 0,
			title: '',
			id: '',
			color: 'gold', 
			isRunning: false, 
			formattedTime: "--:--",
			isFull: false
		}
		this.newSlide = this.newSlide.bind(this);
	}

	componentDidMount(){
		console.log("timer display mounted");
		this.format();
		fetch('/api/slides')
		.then(res=>res.json())
		.then(json=>{
			this.setState({
				id: _slideId,
				title: slideTitle,
				minutes: minutes,
				seconds: seconds,
				color: slideColor,				
			});
		});
	}

	componentWillUnmount(){

	}

	catchMinutes (e){
		console.log("things are happening!!!");
		this.setState({ minutes: e.target.value });
	}

	catchSeconds(e){
		this.setState({ seconds: e.target.value });
	}

	catchColor(e){
		this.setState({ color: e.target.value });
	}

	catchTitle(e){
		this.setState({ title: e.target.value});
	}

/*	handleSubmit(e){
		console.log('form submitted');
		this.setState({
			minutes: e.target.value,
			seconds: e.target.value,
			color: e.target.value
		})
	}*/


	start(e){
		this.setState({ isRunning: true});
	}

	pause(e){
		this.setState({isRunning: false});
	}

	tick(e){
		this.setState({ isRunning: !this.state.isRunning});
		var oldMin = parseInt(this.state.minutes*60);
		var oldSec = parseInt(this.state.seconds);
		var totalSec = parseInt(oldMin)+parseInt(oldSec);
		var tock = setInterval(()=>{
			this.format();
			console.log(totalSec, oldMin, oldSec);
			var newMin = parseInt(totalSec/60);
			var newSec= totalSec%60;
			this.setState({
				minutes: newMin,
				seconds: newSec,
			});
			if (totalSec === -1){
				this.setState({
					totalSec: 0,
					minutes: 0,
					seconds: 0, 
					isRunning: false 
				});
				clearInterval(tock);
				return;
			} else if (totalSec >= 0){
				if (this.state.isRunning === true) {
					totalSec = totalSec-1;
					this.setState({
						totalSec: totalSec,
						minutes: newMin,
						seconds: newSec
					});	
				} else if (this.state.isRunning === false){
					clearInterval(tock);
				}		
			} else if (this.state.isRunning === false){
				return;
			}
		}, 1000);
	
	}

	goFull(e) {
		this.setState({ isFull: true });
	}


	format(){
		console.log("formatter called");
		if(this.state.minutes <10 && this.state.seconds <10){
			this.setState({formattedTime: ("0"+this.state.minutes+":"+"0"+this.state.seconds)});
		} else if (this.state.minutes < 10 && this.state.seconds >10){
			this.setState({formattedTime: ("0"+this.state.minutes+":"+this.state.seconds)});
		} else if (this.state.minutes > 10 && this.state.seconds < 10){
			this.setState({formattedTime: (this.state.minutes+":"+"0"+this.state.seconds)});
		} else if (this.state.minutes > 10 && this.state.minutes > 10){
			this.setState({formattedTime: (+this.state.minutes+":"+this.state.seconds)});
		} else if (this.state.minutes === 0 && this.state.seconds === 0){
			this.setState({formattedTime: "--:--"});
		}
	}

	newSlide(){
		fetch('/api/slides', {method: 'POST'})
		.then(res => res.json())
		.then(json => {
			let Slide = [{
				minutes: this.state.minutes,
				seconds: this.state.seconds,
				slideColor: this.state.color,
				slideTitle: this.state.title
			}];
			Slide.push(json);


		});
	}

	render(){
		return(
			<div>
				<Fullscreen 
					enabled = {this.state.isFull}
					onChange={isFull => this.setState({isFull})}
				>
				<div  className= "centered" style={{margin: "20px", backgroundColor: this.state.color}}>
					<h1> {this.state.title}: {this.state.formattedTime}</h1>
				</div>
				</Fullscreen>
				<div className="centered row">
					<form onSubmit = {(e)=>this.handleSubmit(e)} >
						Title: <input type = "text" onChange={(e)=> this.catchTitle(e)}/>
						Minutes:<input type="number" onChange={(e)=> this.catchMinutes(e)}/> 
						Seconds:<input type = "number" onChange={(e)=> this.catchSeconds(e)}/>  
						Color:<input type = "string" onChange={(e)=> this.catchColor(e)}/>   

					</form>
					<button onClick={(e)=>this.tick(e)}>Start/Pause</button>
					<button onClick={(e)=>this.goFull(e)}> Fullscreen </button>
					<button onClick={(e)=>this.newSlide(e)}> Save </button>
					<button> Delete </button>
					<p> "TODO: add player controls"</p>
				</div>
				<div>
					<SlideLibrary />
				</div>
				<div>
					<WorkoutEditor />
					<Schedule />
				</div>
			</div>
		)
	}

}

export default TimerDisplay;
