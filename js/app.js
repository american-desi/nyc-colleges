var map;
function initMap() {
	
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.000, lng: -78.644},
          zoom: 6
        });
}

// function Map(){

// 	var self = this;

// 	self.locations = ko.observableArray([

// 	]);

// 	self.searchTerm = [

// 	];

// 	self.googleImg = [

// 	];

// 	self.wikiLink = [

// 	];
// };

var locations = [
	{
		title: "Columbia University",
		latlng: {lat: 40.8075, lng: -73.9626},
		cityAddress: "New York, NY 10027",
		url: "www.columbia.edu",
		cpuTitle: "colu"
	},
	{
		title: "Harvard University",
		latlng: {lat: 42.3770, lng: -71.1167},
		streetAddress: "Cambridge, MA 02138",
		cityAddress: "",
		url: "www.harvard.edu",
		cpuTitle: "hrvdu"
	},
	{
		title: "Queens College",
		latlng: {lat: 40.7363, lng: -73.8161},
		cityAddress: "Flushing, NY 11367",
		url: "www.qc.cuny.edu",
		cpuTitle: "qc"
	},
	{
		title: "University of Connecticut",
		latlng: {lat: 41.8077, lng: -72.2540},
		cityAddress: "Storrs, CT 06269",
		url: "www.uconn.edu",
		cpuTitle: "uconn"
	},
	{
		title: "Drexel University",
		latlng: {lat: 39.9566, lng: 75.1899},
		cityAddress: "Philadelphia, PA 19104",
		url: "www.drexel.edu",
		cpuTitle: "drexu"
	}
];

var ViewModel = function(locations) {
	for (var i = 0 ; i < locations.length; i++){
		var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
   		title: locations.title
  	});

	}
	
	

};

ko.applyBindings(new ViewModel());
