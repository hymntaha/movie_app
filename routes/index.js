var moviesJSON = require('../movies.json');

exports.home =  function(req, res) {
    var movies = moviesJSON.movies;

    res.render('home',{
        title : "Star Wars Movies",
        movies : movies
    });
};

exports.movies_single = function (req, res) {
    var episode_number = req.params.episode_number;
    res.send('This the page for episode ' + episode_number);
};

exports.notFound =  function (req, res) {
    res.send("This is not the page that you are looking for.");
};