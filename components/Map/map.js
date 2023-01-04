import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];

    const WaterfronttoKingGeorge = [
        [49.28594, -123.11129], // Waterfront 
        [49.285581150633966, -123.12012245876285], // Burrard
        [49.28276795358473, -123.1164699145821], // Granville
        [49.28010484687972, -123.11012142014103], // Stadium-Chinatown
        [49.273374980784865, -123.10037145876296], // Main Street Science World
        [49.262721001091556, -123.06927941643552], // Commercial Broadway
        [49.24844626535717, -123.05598167410812], // Nanaimo
        [49.24436337925635, -123.04537402992739], // 29th Avenue
        [49.23855530902799, -123.0317256145831], // Joyce-Collingwood
        [49.22991271599505, -123.01265107225555], // Patterson
        [49.22593989446889, -123.00385127225569], // Metrotown
        [49.220193228996386, -122.98845204229738], // Royal Oak
        [49.21254265709066 , -122.95914504342], // Edmonds
        [49.200068725477024, -122.94922489130668], // 22nd Street
        [49.20159918383558, -122.91263972992837], // New Westminister
        [49.204943945073374, -122.90607708574763], // Columbia
        [49.204575904842045, -122.87402738018886], // Scott Road
        [49.1991136014707, -122.85066387225632], // Gateway
        [49.1829310367517, -122.84473292807587], // King George
    ]

    const WaterfronttoProductionWay = [
        [49.204943945073374, -122.90607708574763], // Columbia
        [49.224860238697396, -122.88949270294468], // Sapperton
        [49.23268213068468, -122.88456287225554], // Braid
        [49.24875892482227, -122.89717730665], // Lougheed Town Center
        [49.25367827613695, -122.91868207173422], // Production Way University
    ]

    const blueOption = {color: 'blue'};
    const darkblueOption = {color: 'darkblue'};
    const redOption = {color: 'red'};

    const TrainIcon = L.icon({
        iconUrl: 'BusLogo.png',
        iconSize:     [40, 40], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
    });

    return (
        <MapContainer className={style.map} center={position} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={TrainIcon}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>


            <Marker position={[49.285581150633966, -123.12012245876285]} icon={TrainIcon}>
                <Popup>
                   Burrard Station
                </Popup>
            </Marker>

            <Marker position={[49.28276795358473, -123.1164699145821]} icon={TrainIcon}>
                <Popup>
                   Granville Station
                </Popup>
            </Marker>

            <Marker position={[49.28010484687972, -123.11012142014103]} icon={TrainIcon}>
                <Popup>
                   Stadium-Chinatown Station
                </Popup>
            </Marker>

            <Marker position={[49.273374980784865, -123.10037145876296]} icon={TrainIcon}>
                <Popup>
                   Main Street-Science World Station
                </Popup>
            </Marker>

            <Marker position={[49.262721001091556, -123.06927941643552]} icon={TrainIcon}>
                <Popup>
                   Commercial Broadway Station
                </Popup>
            </Marker>

            <Marker position={[49.24844626535717, -123.05598167410812]} icon={TrainIcon}>
                <Popup>
                   Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={[49.24436337925635, -123.04537402992739]} icon={TrainIcon}>
                <Popup>
                   29th Avenue Station
                </Popup>
            </Marker>

            <Marker position={[49.23855530902799, -123.0317256145831]} icon={TrainIcon}>
                <Popup>
                   Joyce Collingwood Station
                </Popup>
            </Marker>

            <Marker position={[49.22991271599505, -123.01265107225555]} icon={TrainIcon}>
                <Popup>
                   Patterson Station
                </Popup>
            </Marker>

            <Marker position={[49.22593989446889, -123.00385127225569]} icon={TrainIcon}>
                <Popup>
                   Metrotown Station
                </Popup>
            </Marker>

            <Marker position={[49.220193228996386, -122.98845204229738]} icon={TrainIcon}>
                <Popup>
                   Royal-Oak Station
                </Popup>
            </Marker>

            <Marker position={[49.21254265709066, -122.95914504342]} icon={TrainIcon}>
                <Popup>
                   Edmonds Station
                </Popup>
            </Marker>

            <Marker position={[49.200068725477024, -122.94922489130668]} icon={TrainIcon}>
                <Popup>
                   22nd Street Station
                </Popup>
            </Marker>

            <Marker position={[49.20159918383558, -122.91263972992837]} icon={TrainIcon}>
                <Popup>
                  New Westminister Station
                </Popup>
            </Marker>

            <Marker position={[49.204943945073374, -122.90607708574763]} icon={TrainIcon}>
                <Popup>
                  Columbia Station
                </Popup>
            </Marker>

            <Marker position={[49.204575904842045, -122.87402738018886]} icon={TrainIcon}>
                <Popup>
                  Scott Road Station
                </Popup>
            </Marker>

            <Marker position={[49.1991136014707, -122.85066387225632]} icon={TrainIcon}>
                <Popup>
                  Gateway Station
                </Popup>
            </Marker>

            <Marker position={[49.18971392944762, -122.84792071458409]} icon={TrainIcon}>
                <Popup>
                  Surrey Central Station
                </Popup>
            </Marker>

            <Marker position={[49.1829310367517, -122.84473292807587]} icon={TrainIcon}>
                <Popup>
                  King George Station
                </Popup>
            </Marker>

            <Marker position={[49.224860238697396, -122.88949270294468]} icon={TrainIcon}>
                <Popup>
                  Sapperton Station
                </Popup>
            </Marker>

            <Marker position={[49.23268213068468, -122.88456287225554]} icon={TrainIcon}>
                <Popup>
                  Braid Station
                </Popup>
            </Marker>

            <Marker position={[49.24875892482227, -122.89717730665]} icon={TrainIcon}>
                <Popup>
                  Lougheed Town Center Station
                </Popup>
            </Marker>

            <Marker position={[49.25367827613695, -122.91868207173422]} icon={TrainIcon}>
                <Popup>
                  Production Way University
                </Popup>
            </Marker>

            <CircleMarker center={[49.25367827613695, -122.91868207173422]} pathOptions={redOption} radius={25}>
                <Popup>Terminus Station: Production Way University</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1829310367517, -122.84473292807587]} pathOptions={redOption} radius={25}>
                <Popup>Terminus Station: King George</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={WaterfronttoKingGeorge}/>
            <Polyline pathOptions={darkblueOption} positions={WaterfronttoProductionWay}/>


        </MapContainer>
    )
}