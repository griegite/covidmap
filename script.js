mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZWdpdGUiLCJhIjoiY2s3bzAwdzhuMDRiMzNtbXF4YXlpcTBvNSJ9.IbIqH8zs10C4ugVMFYIHQg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [10,10],
    zoom:1
});

map.on('load', function(){
    map.addSource('my-data', {
        type: 'geojson',
        data: 'https://s3.amazonaws.com/kevinmanion.com/covid-312.geojson'
    })
    map.addLayer({
        'id': 'map',
        'type': 'circle',
        'source': 'my-data',
        'paint': {
            'circle-color' : '#FF6347',
            'circle-radius': 4
        }
    });
})
