/**
 * QueuerequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    list:function(req, res){
        Queuerequest.find({}).exec(function(err, queuerequest){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/list', {queuerequest:queuerequest});
        });
    },

    add: function(req, res){
        res.view('add');
    },
    create:function(req, res){
        var customername = req.body.customername;
        var customerphone = req.body.customerphone;
        var customeremail = req.body.customeremail;

        Queuerequest.create({customName:customername, customPhone:customerphone, customEmail:customeremail}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/');
        }); 
    },

    delete: function(req, res){
        Queuerequest.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/');
        });

        return false;
    },

};

