/**
 * TypeController
 *
 * @description :: Server-side logic for managing types
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('Type',null)!=null)
        {
            Types.create(req.param('Type')).exec(function(err,model){
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
                    res.redirect('/api/v1/types/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('types/create');
        }
    },
    all: function (req, res) {    
        Types.find().exec(function(err, types) {
            console.log('-------------start types---------');
            console.log(types);
            console.log('-------------end types---------');
            res.render('types/index',{'types':types});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Types.findOne(id).exec(function(err,model){
            res.render('types/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Types.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('Type',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('Type',null);
                model.text=p.text;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/types/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('types/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Types.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/types/all/');                
                // record has been removed
            });
        });
    }
}       