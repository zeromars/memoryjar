/**
 * TagController
 *
 * @description :: Server-side logic for managing tags
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('Tag',null)!=null)
        {
            Tags.create(req.param('Tag')).exec(function(err,model){
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
                    res.redirect('/api/v1/tags/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('tags/create');
        }
    },
    all: function (req, res) {    
        Tags.find().exec(function(err, tags) {
            console.log('-------------start tags---------');
            console.log(tags);
            console.log('-------------end tags---------');
            res.render('tags/index',{'tags':tags});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Tags.findOne(id).exec(function(err,model){
            res.render('tags/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Tags.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('Tag',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('Tag',null);
                model.user=p.user;
                model.memory=p.memory;
                model.type=p.type;
                model.text=p.text;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/tags/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('tags/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Tags.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/tags/all/');                
                // record has been removed
            });
        });
    }
}       