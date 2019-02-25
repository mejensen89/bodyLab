import React, {Component} from 'react';


class WorkoutEditor extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentWorkoutId: 0,
			workoutName: " ",
			slideArray: [],
		}
	}

	render(){
		return(
			<div>
				<div className = "row centred">
					<h1> Create new workout </h1>
				</div>
				<div style={{margin: "20px"}}>
					<p> "Workout List. This will be a list of saved series of slides. " </p>
					<div> 
						<form>
							<input type="text" name="WorkoutName" placeholder = "Workout Name"/>
							<input type="text" name="WorkoutId" placeholder = "this will be a string"/>
							<input type="text" name="slideToAdd" placeholder = "Pick your slides"/>
							<button> Save </button>
							<button> Delete </button>
						</form>
					</div>
				</div>
			</div>

		)
	}
}

export default WorkoutEditor;