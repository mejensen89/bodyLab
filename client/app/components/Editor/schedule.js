import React, {Component} from 'react';


class Schedule extends Component{
	constructor(props){
		super(props);		

		this.state = {
			day: Date,
			workouts: [],
		}		
	}

	componetDidMount(){
		var today = new Date();
	    var date =  (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
		this.setState({day: date});
		console.log(this.state.day);
		
	}

	render(){

		return(
			<div className="row">
				<div>
					<p> {this.state.day} </p>
				</div>
				<div>
					<p> list of workouts goes here </p>
				</div>
			</div>
		)
	}
}

export default Schedule;