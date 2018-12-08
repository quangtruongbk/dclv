/**
 * BranchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list:function(req, res){
        Branch.find({}).exec(function(err, branch){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/listbranch', {branch:branch});
        });
    },
    listJson:function(req, res){
        Branch.find({}).exec(function(err, branch){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.json(branch);
        });
    },
};

