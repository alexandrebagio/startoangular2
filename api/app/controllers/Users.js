module.exports = function(app) {
    
    var Users = new app.models.Users();

    app.get('/users', function(req, res){
        res.status(200).json(Users.getAll());
    })

}