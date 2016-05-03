var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.000, lng: -78.644},
          zoom: 6
        });
}


function toggleBounce() {
      if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
      } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){ marker.setAnimation(null); }, 750);
      }
};

