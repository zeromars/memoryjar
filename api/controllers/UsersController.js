/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('User',null)!=null)
        {
            Users.create(req.param('User')).exec(function(err,model){
                // Error handling
                console.log('-------------start create---------');
                console.log(err);
                console.log('-------------break---------');
                console.log(model);
                console.log('-------------end create---------');
                if (err) {
                    res.send('Error:Sorry! Something went Wrong');
                }else {
                    //res.send('Successfully Created!');
                    res.redirect('/api/v1/users/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('users/create');
        }
    },
    all: function (req, res) {    
        Users.find().exec(function(err, users) {
            console.log('-------------start users---------');
            console.log(users);
            console.log('-------------end users---------');
            res.render('users/index',{'users':users});
            return;
        });
    },
    index: function (req, res) {
        Users.find().populate('memories').populate('reminders').populate('settings').populate('tags').exec(function(err,model){
            console.log('model is me');
            console.log(model);
            //res.render('users/view',{'model':model});     
            res.json({Users: model});
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Users.findOne(id).populate('memories').populate('reminders').populate('settings').populate('tags').exec(function(err,model){
            console.log('model is me');
            console.log(model);
            res.render('users/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Users.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('User',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('User',null);
                model.firstname=p.firstname;
                model.lastname=p.lastname;
                model.email=p.email;
                model.lastlogin=p.lastlogin;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/users/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('users/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Users.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/users/all/');                
                // record has been removed
            });
        });
    }
}       