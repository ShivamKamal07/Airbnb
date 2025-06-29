var key = mapToken;
var streets = L.tileLayer.Unwired({key: key, scheme: "streets"});

var map = L.map('map', {
    center: [28.6139,77.2090], 
    zoom: 14,
    scrollWheelZoom: false,
    layers: [streets]         
});


L.control.scale().addTo(map);


L.control.layers({
    "Streets": streets
}).addTo(map);
