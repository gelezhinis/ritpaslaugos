
// Map
function initMap() {
  const loc = { lat: 54.389037, lng: 24.042761 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 16,
    center: loc
  });
  const marker = new google.maps.Marker({position: loc, map: map});
}

// Halls Map
$(document).ready(function() {
   var map = null;
   var myMarker;
   var myLatlng;
 
   function initializeGMap(lat, lng) {
     myLatlng = new google.maps.LatLng(lat, lng);
 
     var myOptions = {
       zoom: 17,
       zoomControl: true,
       center: myLatlng,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
 
     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
     myMarker = new google.maps.Marker({
       position: myLatlng
     });
     myMarker.setMap(map);
   }
   // Re-init map before show modal
   $('#myModal').on('show.bs.modal', function(event) {
     var button = $(event.relatedTarget);
     initializeGMap(button.data('lat'), button.data('lng'));
     $("#location-map").css("width", "100%");
     $("#map_canvas").css("width", "100%");
   }); 
   // Trigger map resize event after modal shown
   $('#myModal').on('shown.bs.modal', function() {
     google.maps.event.trigger(map, "resize");
     map.setCenter(myLatlng);
   });
 });

// New Halls Map
function navigate(lat, lng) {
  // If it's an iPhone..
  if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      }
    }
    var ver = iOSversion() || [0];

    var protocol = 'http://';
    if (ver[0] >= 6) {
      protocol = 'maps://';
    }
    window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
  }
  else {
    window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
  }
}

// Sticky Navbar
window.addEventListener('scroll', function() {
   if(window.scrollY > 85) {
      this.document.querySelector('#navbar').style.opacity = 0.8;
   } else {
      this.document.querySelector('#navbar').style.opacity = 1;
   }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
   if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;

      $('html, body').animate(
         {scrollTop: $(hash).offset().top - 80}, 800

      );
   }
});

// Hide dropdown menu

// $(".menu a").on("click", function() {
//    setTimeout(function() {
//      $(".toggler").click();
//    }, 200)
//  });

$(".menu").on("click", function() {
    $(".toggler").click();
   });




 

