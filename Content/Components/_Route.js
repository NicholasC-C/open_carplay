let Routing_instance = new openrouteservice.Directions({ api_key: "5b3ce3597851110001cf6248bfcc939ac3564dcb9e26ce90051b14e1" });

export default function _Route() {
    try {
        // Request API call from openrouteservice about route with 2 start & end position coordinates
        console.log("Calculating route...");
        var request = new XMLHttpRequest();

        request.open('GET', "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248bfcc939ac3564dcb9e26ce90051b14e1&start=" + this.props.lat + "&end=" + this.props.long);
        request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

        // On data recieved, store it in an array
        let data = [];
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                data = JSON.parse(this.responseText);
                console.log(data.features);
            }
        };

        request.send();
    } catch (exception) {
        console.log("Failed to get directions: " + exception)
    }
}