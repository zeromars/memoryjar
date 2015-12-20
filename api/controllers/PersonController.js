/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
		if(req.method=='POST'&&req.param('Person',null)!=null)
		{
			Person.create(req.param('Person')).exec(function(err,model){
				// Error handling
				console.log(err);
				console.log(model);
				if (err) {
					res.send('Error:Sorry! Something went Wrong');
				}else {
					//res.send('Successfully Created!');
					res.redirect('person/view/'+model.id);
				}
			});
		}
		else
		{
			res.render('person/create');
		}
	},
	index: function (req, res) {    
		Person.find().exec(function(err, persons) {
			console.log(persons);
			res.render('person/index',{'persons':persons});
			return;
		});
	},
	view: function (req, res) {
		var id=req.param('id',null);
		Person.findOne(id).exec(function(err,model){
			res.render('person/view',{'model':model});     
		});
	},
	update: function (req, res) {
		var id=req.param('id',null);
		Person.findOne(id).exec(function(err, model) {
			console.log(err);
			console.log(model);
			if(req.method=='POST'&&req.param('Person',null)!=null)
			{
				var p=req.param('Person',null);
				model.name=p.name;
				model.age=p.age;
				model.save(function(err){
					if (err) {
						res.send('Error');
					}else {
						res.redirect('person/view/'+model.id);
					}
				});
			}
			else
			{
				res.render('person/update',{'model':model});
			}
		});
	},
	delete: function (req, res) {    
		var id=req.param('id',null);              
		Person.findOne(id).exec(function(err, user) {
			console.log(err);
			console.log(user);
			user.destroy(function(err) {                
				res.redirect('person/index/');                
				// record has been removed
			});
		});
	}
}       