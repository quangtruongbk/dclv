/**
 * QueuerequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list:function(req, res){
        var branchId = req.params.id;
        Queue.find({branchId : branchId}).exec(function(err, queue){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            console.log('check: '+req.params.id);
            res.view('pages/listqueue', {queue:queue, branchID:branchId});
        });
    },

    listJson:function(req, res){
        var branchId = req.params.id;
        Queue.find({branchId : branchId}).exec(function(err, queue){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            console.log('check: '+req.params.id);
            res.json(queue);
        });
    },

};

