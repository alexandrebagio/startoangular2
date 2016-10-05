
function Users() {}

Users.prototype.getAll = function() {
    let users = [
        {'id':1, 'name':'fulano'},
        {'id':1, 'name':'ciclano'}
    ]; 
    return users;
}

module.exports = function() {
    return Users;
}