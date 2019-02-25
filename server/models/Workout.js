const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema(
	{
		_workoutId: {
			type: Schema.ObjectId,
			required: true,
			unique: true
		},
		workoutTitle: {
			type: String,
			
		},
		slideArray: {
			type: Array,
			required: true
		},
	},
	{timestamps: true}
);

module.exports = mongoose.model('Workout', workoutSchema);