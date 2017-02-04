var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// // set the home page route
app.get('/', function(req, res) {
	res.write(`<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>Mentor Education Bootstrap Theme</title>
	    <meta name="description" content="Free Bootstrap Theme by BootstrapMade.com">
	    <meta name="keywords" content="free website templates, free bootstrap themes, free template, free bootstrap, free website template">
	    
	    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Candal|Alegreya+Sans">
	    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	    <link rel="stylesheet" type="text/css" href="css/imagehover.min.css">
	    <link rel="stylesheet" type="text/css" href="css/style.css">
	   </head>
  <body>
  Hello
	  `)
	setTimeout(() => {
		res.end(`	
		 	    World
	    <script src="js/jquery.min.js"></script>
	    <script src="js/jquery.easing.min.js"></script>
	    <script src="js/bootstrap.min.js"></script>
	    <script src="js/custom.js"></script>
	    <script src="contactform/contactform.js"></script>
	    
	  </body>
	</html>
`);
	}, 4000)
})

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});


 