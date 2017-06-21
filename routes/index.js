exports.home = function(req, res){
	res.render('default',
		 { title : 'home sweet home',
		   users : ['Kalyan', 'Vasanth', 'Akondi']});
}

exports.about = function(req, res){
	res.render('default',
		 { title : 'About me !!!' });
}