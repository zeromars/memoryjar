/**
 * ReminderController
 *
 * @description :: Server-side logic for managing reminders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('Reminder',null)!=null)
        {
            Reminders.create(req.param('Reminder')).exec(function(err,model){
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
                    res.redirect('/api/v1/reminders/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('reminders/create');
        }
    },
    all: function (req, res) {    
        Reminders.find().exec(function(err, reminders) {
            console.log('-------------start reminders---------');
            console.log(reminders);
            console.log('-------------end reminders---------');
            res.render('reminders/index',{'reminders':reminders});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Reminders.findOne(id).exec(function(err,model){
            res.render('reminders/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Reminders.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('Reminder',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('Reminder',null);
                model.user=p.user;
                model.memory=p.memory;
                model.text=p.text;
                model.message=p.message;
                model.when=p.when;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/reminders/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('reminders/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Reminders.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/reminders/all/');                
                // record has been removed
            });
        });
    }
}       