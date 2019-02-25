const Workout = require("../../models/Workout");

module.exports = (app) =>{

	app.get('/api/workouts', (req, res, next)=>{
		Workout.find()
		.exec()
		.then((workout) => res.json(workout))
		.catch((err)=> next(err));
	});

	app.post('/api/workouts', function(req, res, next){
		const workout = new Workout();

		workout.save()
		  .then(()=> res.json(workout))
		  .catch((err)=> next(err));
	});

	app.delete('/api/workouts/:id', function(req, res, next){
		Workout.findOneAndDelete({_workoutId: req.params.id})
		  .exec()
		  .then((workout)=> res.json())
		  .catch((err)=> next(err));
	});

	app.put('/api/workouts/:id/update', (req, res, next)=>{
		Workout.findById(req.params.id)
		  .exec()
		  .then((workout)=>{
		  	workout.save()
		  	  .then(()=> res.json(workout))
		  	  .catch((err)=> next(err));
		  })
		  .catch((err)=> next(err));
	});

}