<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <link rel="stylesheet" href="./styles.css">
</head>

<body>
    <h1>ISS Realtime Tracker
        <img id="iss_svg" src="./iss.svg" alt="IssImage">
    </h1>
    <table>
        <tr>
            <th></th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Speed</th>
        </tr>
        <tr>
            <td>ISS</td>
            <td id="lat"></td>
            <td id="lon"></td>
            <td id="vel"></td>
        </tr>
        <tr>
            <td>User</td>
            <td id="latU"></td>
            <td id="lonU"></td>
            <td id="velU"></td>
        </tr>


    </table>
    <div id="issMap"></div>
    <footer>
    <a href="https://www.linkedin.com/in/ricardo-filipe-caetano/">Ricardo Caetano</a> &copy 2021    
    </footer>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <script src="./main.js"></script>
    <script src="./geolocate.js"></script>

</body>

</html>