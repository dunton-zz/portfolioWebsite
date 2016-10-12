var projectDetails = {
	"project0Details": "<p>A spin-off of the classic arcade game, <i>Frogger</i>, users try to reach the water before bugs touch them. Their score displays at the top of the screen.</p>",
	"project1Details": "<p>Utilizing the Model-View-Controller framework, Knockout, I implemented AJAX calls to WIkipedia, the New York Times and Google Maps API a user can enter their address and get Wikipedia information about their location, a street view picture and New York Times articles occuring near them.</p>",
	"project2Details": "<p>Someone gave me a design mockup they were developing of trading cards for dogs. So I build it out using basic HTML/CSS principles. </p>",
	"project3Details": "<p>Took a design mockup for a website and created a responsive website working off the design mockup utilizing Javascript, HTMl/CSS and the Bootstrap framework</p>",
	"project4Details": "<p>Built a web scraper to take Adidas' men's shoe selection and output the shoe name and price to the console. I used Python's Beautiful Soul library to accomplish this task.",
	"project5Details": "<p>I was given a slow and underperforming website. Made changes to scripts and other front-end features to speed up and optimize the site.</p>"
}

var contact = {
	"email": "ryandunton1@gmail.com",
	"phone": "208-262-6461",
	"twitter": "@ryan_dunton"
}

var project0Details = projectDetails.project0Details;
var project1Details = projectDetails.project1Details;
var project2Details = projectDetails.project2Details;
var project3Details = projectDetails.project3Details;
var project4Details = projectDetails.project4Details;
var project5Details = projectDetails.project5Details;

$("#project0-details").append(project0Details);
$("#project1-details").append(project1Details);
$("#project2-details").append(project2Details);
$("#project3-details").append(project3Details);
$("#project4-details").append(project4Details);
$("#project5-details").append(project5Details);

$("#project0-details-small").append(project0Details);
$("#project1-details-small").append(project1Details);
$("#project2-details-small").append(project2Details);
$("#project3-details-small").append(project3Details);
$("#project4-details-small").append(project4Details);
$("#project5-details-small").append(project5Details);


$("#project0-details-mobile").append(project0Details);
$("#project1-details-mobile").append(project1Details);
$("#project2-details-mobile").append(project2Details);
$("#project3-details-mobile").append(project3Details);
$("#project4-details-mobile").append(project4Details);
$("#project5-details-mobile").append(project5Details);


var email = contact.email;
var phone = contact.phone;
var twitter = contact.twitter;

$('#phoneContact').append(phone);
$('#emailContact').append(email);
$('#twitterContact').append(twitter);

