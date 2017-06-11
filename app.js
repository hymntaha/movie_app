/**
 * Created by taha on 6/8/17.
 */
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movies_single);

app.get('*', routes.notFound);

app.listen(3000, function () {
    console.log("The application is running on localhost:3000");
});
