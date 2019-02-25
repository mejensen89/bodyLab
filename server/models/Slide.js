const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slideSchema = new mongoose.Schema(
	{
		_slideId: {
			type: Schema.ObjectId,
			auto: true,
			
		},
		slideTitle: {
			type: String,
		},
		slideColor: {
			type: String,
			// required: true,
		}, 
		minutes: {
			type: Number,
			// required: true,
		},
		seconds: {
			type: Number,
			// required: true,
		},
	},
	{timestamps: true }
);

module.exports = mongoose.model("Slide", slideSchema);