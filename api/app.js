var app = require('./app/config/config')();

app.listen(3000, function(){
    console.log('Running!');
});