var map;
function initMap() {
	
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.000, lng: -78.644},
          zoom: 6
        });
}

function Map(){

	var self = this;

	self.locations = ko.observableArray([

	]);

	self.searchTerm = [

	];

	self.googleImg = [

	];

	self.wikiLink = [

	];


};




var markers = [
	{
		title: "Columbia University",
		lat: 40.8075,
		lng: -73.9626,
		cityAddress: "New York, NY 10027",
		url: "www.columbia.edu"
	},
	{
		title: "Harvard University",
		lat: 42.3770,
		lng: -71.1167,
		streetAddress: "Cambridge, MA 02138",
		cityAddress: "",
		url: "www.harvard.edu"
	},
	{
		title: "Queens College",
		lat: 40.7363,
		lng: -73.8161,
		cityAddress: "Flushing, NY 11367",
		url: "www.qc.cuny.edu"
	},
	{
		title: "University of Connecticut",
		lat: 41.8077,
		lng: -72.2540,
		cityAddress: "Storrs, CT 06269",
		url: "www.uconn.edu"
	},
	{
		title: "Drexel University",
		lat: 39.9566,
		lng: 75.1899,
		cityAddress: "Philadelphia, PA 19104",
		url: "www.drexel.edu"
	}
];

var ViewModel = function() {
	// var marker = new google.maps.Marker({
   // position: myLatLng,
    //map: map,
   // title: 'Hello World!'
  //});

};

ko.applyBindings(new ViewModel());



