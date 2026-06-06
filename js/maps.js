document.addEventListener(
"DOMContentLoaded", () => {

    const map =
    L.map("map").setView(
        [27.7, 77.8],
        5
    );

    L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
        "&copy; OpenStreetMap contributors"
    }
    ).addTo(map);

    const chandigarh =
    [30.7333, 76.7794];

    const tikamgarh =
    [24.7450, 78.8330];

    L.marker(chandigarh)
    .addTo(map)
    .bindPopup(
        "Chandigarh"
    );

    L.marker(tikamgarh)
    .addTo(map)
    .bindPopup(
        "Tikamgarh"
    );

    L.polyline(
    [
        chandigarh,
        tikamgarh
    ],
    {
        color:"#ff69b4",
        weight:4,
        opacity:0.8
    }
    ).addTo(map);

    map.fitBounds(
    [
        chandigarh,
        tikamgarh
    ],
    {
        padding:[50,50]
    });

});