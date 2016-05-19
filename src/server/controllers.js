exports.loginController = function(req,res){
    var orgid = req.body['orgid'],
    	username = req.body['username'],
    	password = req.body['password'];
        
        res.status(200).send({'name':'nalin'});
};
