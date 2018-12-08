/**
 * QueuerequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list:function(req, res){
        var branchId = req.id;
        Queue.find({branch_id : branchId}).exec(function(err, queue){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/listqueue', {queue:queue});
        });
    },


};

