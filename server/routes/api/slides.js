const Slide = require("../../models/Slide");

module.exports = (app) => {

	app.get('/api/slides', (req, res, next) => {
	    Slide.find()
	      .exec()
	      .then((slide) => res.json(slide))
	      .catch((err) => next(err));
	});

	app.post('/api/slides', function(req, res, next){
		const slide = new Slide();

		slide.save()
		  .then(()=> res.json(slide))
		  .catch((err)=> next(err));
	});

	app.delete('api/slides/:id', function(req, res, next){
		Slide.findOneAndDelete({_slideId: req.params.id})
		  .exec()
		  .then((slide)=> res.json())
		  .catch((err)=> next(err));
	});

	app.put('/api/slides/:id/update', (req, res, next)=>{
		Slide.findById(req.params.id)
		  .exec()
		  .then((slide)=>{
		  	slide.save()
		  	  .then(()=> res.json(slide))
		  	  .catch((err)=> next(err));
		  })
		  .catch((err)=> next(err));
	});

}