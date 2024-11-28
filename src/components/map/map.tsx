import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { MAP_CENTER } from '../../const';
import { Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapAddress } from '../../types/map-address';

const confectionaryCustomIcon = new Icon({
  iconUrl: 'img/content/map-marker2.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const productionCustomIcon = new Icon({
  iconUrl: 'img/content/map-marker1.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  activeMapAddress: MapAddress[];
}

function Map({activeMapAddress}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, MAP_CENTER);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      activeMapAddress.forEach((address) => {
        const marker = new Marker({
          lat: address.coords.lat,
          lng: address.coords.lng
        });

        marker
          .setIcon(address.type === 'confectionery' ? confectionaryCustomIcon : productionCustomIcon)
          .addTo(map);
        markers.push(marker);
      });

      return () => {
        if (map) {
          markers.forEach((marker) => {
            map.removeLayer(marker);
          });
        }
      };
    }
  }, [map, activeMapAddress]);

  return <div className="map__wrapper" ref={mapRef}/>;
}

export default Map;
