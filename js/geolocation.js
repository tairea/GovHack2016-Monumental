$(document).ready(function(){


            navigator.geolocation.getCurrentPosition(show_map,geo_error);

            function geo_error() {
                var src = "http://nzhistory.net.nz/locations.kml";
                var   lats = -41.270376;
                var   longs = 174.8886719;

                var mapProp = {
                    center:new google.maps.LatLng(lats, longs),
                    zoom:11,
                    mapTypeId:google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                };

                var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

                loadKmlLayer(src,map);
                function loadKmlLayer(src, map) {
                    var kmlLayer = new google.maps.KmlLayer(src, {
                        suppressInfoWindows: true,
                        preserveViewport: false,
                        map: map
                    });
                }


            }

            function show_map(position) {


                var src = "http://nzhistory.net.nz/locations.kml";

                var lats = position.coords.latitude;
                var longs = position.coords.longitude;

                var mapProp = {
                    center: new google.maps.LatLng(lats, longs),
                    zoom: 18,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                };


                var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

                loadKmlLayer(src,map);

                function loadKmlLayer(src, map) {
                    var kmlLayer = new google.maps.KmlLayer(src, {
                        center: new google.maps.LatLng(lats, longs),
                        zoom:20,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: false,
                        preserveViewport:true,
                        suppressInfoWindows: true,
                        map: map
                    });

                        google.maps.event.addListener(kmlLayer, 'click', function(event) {
                        var content = event.featureData.infoWindowHtml;
                        var testimonial = document.getElementById('capture');
                        testimonial.innerHTML = content;
                        console.log(event);


                    });
                }



            }
        });
