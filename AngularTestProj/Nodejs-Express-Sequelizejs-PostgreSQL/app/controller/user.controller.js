const db = require('../config/db.config.js');
const User = db.users;

// Post a Customer
exports.create = (req, res) => {	
	User.create({
				"firstname": req.body.firstname, 
				"lastname": req.body.lastname, 
				"age": req.body.age
			}).then(user => {		
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};
 
exports.findAll = (req, res) => {
	User.findAll().then(users => {
			res.json(users.sort(function(c1, c2){return c1.id - c2.id}));
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.findById = (req, res) => {	
	User.findById(req.params.id).then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

exports.update = (req, res) => {
	const id = req.body.id;
	User.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> User Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};

exports.delete = (req, res) => {
	const id = req.params.id;
	User.destroy({
			where: { id: id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> User Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};