$(document).ready(function() {

  var normalFontSize = $('.navbar-text').css("font-size");

  $('.navbar-text').hover(function(){
      $(this).child.css("font-size", "1.1em");
    }, function() {
      $(this).css("font-size", normalFontSize);
    }
  )

mapboxgl.accessToken = 'pk.eyJ1IjoibWFsd29vZCIsImEiOiJjajB5ODExNDgwMjczMzNvMnRtbGJscDRtIn0.Ua3fOk4G2fq_mW3jsGSa4g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/malwood/cj36uyo2x000c2rpip6quva1a', //stylesheet location
    center: [-122.126946, 37.852229], // starting position
    zoom: 11 // starting zoom
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true
    });


map.on('load', function(){
      map.on('mouseenter', 'wedding-spots', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML("<b>" + e.features[0].properties.name + "</b>" + "<br>" + e.features[0].properties.address)
            .addTo(map);
    });

    map.on('mouseleave', 'wedding-spots', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
})
});
