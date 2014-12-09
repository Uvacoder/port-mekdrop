require('coffee-script').register();
var BT = require('boot-tasks');
var tasks = new BT();
tasks.sync();
var files = require('fs').readdirSync('boot').filter(function (file) {
    return require('path').extname(file) === '.coffee';
}).sort();
files.forEach(function (file) {
    tasks.task(function () {
        console.log("Loading %s...", file);
        require('./boot/' + file).launch(tasks);
    });
});
tasks.do();

/*
var app = require('express')();

app.get('/', function (req, res) {
  res.send('mekdrop.name.api')
})

var server = app.listen(3157, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)

})

*/