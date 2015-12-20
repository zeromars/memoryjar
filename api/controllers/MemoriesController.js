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
            Memories.create(req.param('Memory')).exec(function(err,model){
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
                    res.redirect('/api/v1/memories/view/'+model.id);
                }
            });
        }
        else
        {
            res.render('memories/create');
        }
    },
    recall: function (req, res) {    
        Memories.find().exec(function(err, memories) {
            console.log('-------------start memories---------');
            console.log(memories);
            console.log('-------------end memories---------');
            res.render('memories/index',{'memories':memories});
            return;
        });
    },
    view: function (req, res) {
        var id=req.param('id',null);
        Memories.findOne(id).exec(function(err,model){
            res.render('memories/view',{'model':model});     
        });
    },
    update: function (req, res) {
        var id=req.param('id',null);
        Memories.findOne(id).exec(function(err, model) {
            console.log('-------------start update---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(model);
            console.log('-------------end update---------');
            if(req.method=='POST'&&req.param('Memory',null)!=null)
            {
                console.log('-------------im inside your loop---------');
                var p=req.param('Memory',null);
                model.text=p.text;
                model.image=p.image;
                model.tags=p.tags;
                model.user=p.user;
                model.createdAt=p.createdAt;
                model.updatedAt=p.updatedAt;
                model.save(function(err){
                    if (err) {
                        res.send('Error');
                    }else {
                        res.redirect('/api/v1/memories/view/'+model.id);
                    }
                });
            }
            else
            {
                res.render('memories/update',{'model':model});
            }
        });
    },
    delete: function (req, res) {    
        var id=req.param('id',null);              
        Memories.findOne(id).exec(function(err, user) {
            console.log('-------------start delete---------');
            console.log(err);
            console.log('-------------break---------');
            console.log(user);
            console.log('-------------end delete---------');
            user.destroy(function(err) {                
                res.redirect('/api/v1/memories/recall/');                
                // record has been removed
            });
        });
    }
}       