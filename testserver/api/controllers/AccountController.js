/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    signup:function(req, res){
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var phone = req.body.phone;
        var name = req.body.name;

        Account.create({email:email, username:username, password:password, name:name, phone:phone, account_type:'0'}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            else{
                res.send('Registe success!');
            }
            res.redirect('/');
        }); 
    },
    login:function(req, res){
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        Account.findOne({email:email,password:password}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            else{
                res.send('Login success!');
            }
            res.redirect('/');
        }); 
    },
};

