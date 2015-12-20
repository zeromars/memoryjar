/**
 * MemoryController
 *
 * @description :: Server-side logic for managing memories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        if(req.method=='POST'&&req.param('Memory',null)!=null)
        {
            Memory.create(req.param('Memory')).exec(function(err,model){
                // Error handling
                console.log(err);
                console.log(model);
                if (err) {
                    res.send('Error:Sorry! Something went Wrong');
                }else {
                    //res.send('Successfully Created!');
                    res.redirect('memory/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('memory/create');
        }
    },
    recall: function (req, res) {    
        Memory.find().exec(function(err, memories) {
            console.log(memories);
            res.render('memory/index',{'memories':memories});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Memory.findOne(id).exec(function(err,model){
            res.render('memory/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Memory.findOne(id).exec(function(err, model) {
            console.log(err);
            console.log(model);
            if(req.method=='POST'&&req.param('Memory',null)!=null)
            {
                var p=req.param('Memory',null);
                model.text=p.text;
                model.image=p.image;
                model.tags=p.tags;
                model.user=p.user;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('memory/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('memory/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Memory.findOne(id).exec(function(err, user) {
            console.log(err);
            console.log(user);
            user.destroy(function(err) {                
                res.redirect('memory/index/');                
                // record has been removed
            });
        });
    }
}       