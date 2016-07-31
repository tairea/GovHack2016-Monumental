document.getElementById("header").style.display = "block";
document.getElementById("about").style.display = "block";
document.getElementById("mapcontain").style.display = "none";
document.getElementById("contribute").style.display = "none";

//variables for each menu item
var home = document.getElementsByTagName("a")[0];
var here = document.getElementsByTagName("a")[1];
var search = document.getElementsByTagName("a")[2];
var contrib = document.getElementsByTagName("a")[3];
var us = document.getElementsByTagName("a")[4];
var button1 = document.getElementsByTagName("a")[5];
var button2 = document.getElementsByTagName("a")[6];

//
home.onclick=function(){
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "none";
};

here.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

search.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

contrib.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "block";
};

us.onclick=function(){
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("mapcontain").style.display = "none";
    document.getElementById("contribute").style.display = "none";
};

button1.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

button2.onclick=function(){
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("mapcontain").style.display = "block";
    init();
    document.getElementById("contribute").style.display = "none";
};

/*=========================
    MAP Source:https://snazzymaps.com/style/151/ultra-light-with-labels
==========================*/

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(-39.9324615, 175.0530707), // Wanganui

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };



                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                var kmlLayer = new google.maps.KmlLayer({
                    url: 'http://nzhistory.net.nz/locations.kml',
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    preserveViewport:true,
                    suppressInfoWindows: true,
                    map: map
                });



                   google.maps.event.addListener(kmlLayer, 'click', function(event) {

                    //add kml description to div so to extract the get a element
                    var elem = document.createElement('div');
                    elem.innerHTML = event.featureData.description;
                    var urls = elem.getElementsByTagName('a')[0];

                    //content for bs-dialog
                    var $textAndPic = $('<div></div>');
                    $textAndPic.append('Source: www.nzhistory.net.nz - (for demo purposes only)');
                    $textAndPic.append('<iframe src='+urls+' style="border:none; height: 600px; width: 100%;"></iframe>');
                    $textAndPic.append(event.featureData.description);

                    //bs-dialog
                    BootstrapDialog.show({
                        title: event.featureData.name,
                        message: $textAndPic
                    });


            });

                // Let's also add a marker while we're at it
//                var marker = new google.maps.Marker({
//                    position: new google.maps.LatLng(-39.9324615, 175.0530707),
//                    map: map,
//                    title: 'Snazzy!'
//                });
            }

/*=========================
    END MAP
==========================*/



