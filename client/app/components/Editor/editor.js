import React, {Component} from 'react';
import SlideEditor from './slideEditor';
import WorkoutEditor from './workoutEditor';

class Editor extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div className = "row">
				<div className = "threeWide">
					<SlideEditor />
				</div>
				<div className = "threeWide">
					<WorkoutEditor />
				</div>
			</div>
		)
	}

}

export default Editor;