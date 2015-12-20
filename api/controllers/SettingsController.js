/**
 * SettingController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('Setting',null)!=null)
        {
            Settings.create(req.param('Setting')).exec(function(err,model){
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
                    res.redirect('/api/v1/settings/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('settings/create');
        }
    },
    all: function (req, res) {    
        Settings.find().exec(function(err, settings) {
            console.log('-------------start settings---------');
            console.log(settings);
            console.log('-------------end settings---------');
            res.render('settings/index',{'settings':settings});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Settings.findOne(id).exec(function(err,model){
            res.render('settings/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Settings.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('Setting',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('Setting',null);
                model.user=p.user;
                model.text=p.text;
                model.active=p.active;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/settings/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('settings/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Settings.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/settings/all/');                
                // record has been removed
            });
        });
    }
}       