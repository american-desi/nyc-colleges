var map;

var colu = {lat: 40.8075, lng: -73.9626};
var marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.750, lng: -73.8000},
      zoom: 10
  });


   var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Columbia University</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';


  
  marker = new google.maps.Marker({
      position: colu,
      map: map,
      title: 'Columbia University'
  });

  marker.addListener('click', toggleBounce);

  var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
 
  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });


};

function toggleBounce() {
      if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
      } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){ marker.setAnimation(null); }, 750);
      }
};






var ViewModel = function() {

  //for listview
  //for search
  var $wikiElem = $('#wikipedia-links');
  var wikiUrl = 'http://en.wikipedia.org/w/api.' +
      'php?action=opensearch&search=' + "Columbia University"+ '&format=json' +
      '&callback=wikiCallback';

  var wikiRequestTimeout = setTimeout(function(){
      $wikiElem.text("failed to get wikipedia resources");
      }, 8000);

  $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      // jsonp: "callback",
      success: function(response) {
      var articleList = response[1];

      for (var i =0; i < articleList.length;i++){
          articleStr = articleList[i];
          var url = 'http://en.wikipedia.org/wiki/' + articleStr;
          $wikiElem.append('<li><a href="' + url +'">'+
          articleStr + '</a></li>');
      };

      clearTimeout(wikiRequestTimeout);


        }
    });

  return false

};


