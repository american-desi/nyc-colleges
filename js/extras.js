var nyu = {lat: 40.7295, lng: -73.9965};
var manc = {lat: 40.8899 , lng: -73.9011};
var queens = {lat: 40.7363 , lng: -73.8161};
var baruch = {lat: 40.7402 , lng: -73.9833};
var slc = {lat: 40.9361 , lng: -73.8434};

  var marker2 = new google.maps.Marker({
   		position: colu,
   		animation: google.maps.Animation.DROP,
    	map: map,
    	title: 'Hello World!'
  });
  var marker3 = new google.maps.Marker({
   		position: nyu,
   		animation: google.maps.Animation.DROP,
    	map: map,
    	title: 'Hello World!'
  });
  var marker4 = new google.maps.Marker({
   		position: manc,
   		animation: google.maps.Animation.DROP,
    	map: map,
    	title: 'Hello World!'
  });
  var marker5 = new google.maps.Marker({
   		position: queens,
   		animation: google.maps.Animation.DROP,
    	map: map,
    	title: 'Hello World!'
  });
  var marker6 = new google.maps.Marker({
   		position: baruch,
   		animation: google.maps.Animation.DROP,
    	map: map,
    	title: 'Hello World!'
  });


 marker2.addListener('click', toggleBounce(marker2));
  marker3.addListener('click', toggleBounce(marker3));
  marker4.addListener('click', toggleBounce(marker4));
  marker5.addListener('click', toggleBounce(marker5));
  marker6.addListener('click', toggleBounce(marker6)); 


   marker2.addListener('click', function() {
    infowindow.open(map, marker2);
  }); 
  marker3.addListener('click', function() {
    infowindow.open(map, marker3);
  }); 
  marker4.addListener('click', function() {
    infowindow.open(map, marker4);
  }); 
  marker5.addListener('click', function() {
    infowindow.open(map, marker5);
  }); 
  marker6.addListener('click', function() {
    infowindow.open(map, marker6);
  }); 