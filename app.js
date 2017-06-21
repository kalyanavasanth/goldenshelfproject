var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.locals.pagetitle = "Movie Reviews";
var moviesData = require('./data.json');

app.get('/',  function(req, res){
	res.render('homePage',
		 { movieObj : moviesData.movies});
});

app.get('/wonderWoman', function(req, res){
	res.render('default',
		 { movieObj : moviesData.movies.movie1});
});

app.get('/theMummy', function(req, res){
	res.render('default',
		 { movieObj : moviesData.movies.movie2});
});

app.get('/carsThree', function(req, res){
	res.render('default',
		 { movieObj : moviesData.movies.movie3});
});

app.get('/despicableMeThree', function(req, res){
	res.render('default',
		 { movieObj : moviesData.movies.movie4});
});

app.get('*', function(req, res){
	res.send('are you kidding?');
});

var server = app.listen(3000, function(){
	console.log('Listening to port 3000 !!!');
});