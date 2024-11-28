import { useAppSelector } from '../../hooks';
import { getIdActiveAddress, getMapAdresses } from '../../store/site-process/selectors';
import MapAddressItem from '../map-address-item/map-address-item';
import 'leaflet/dist/leaflet.css';
import Map from '../map/map';


function MapAddressList() {
  const mapAddresses = useAppSelector(getMapAdresses);
  const activeIdAddress = useAppSelector(getIdActiveAddress);
  const activeMapAddress = mapAddresses.filter((address) => address.id === activeIdAddress);

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <Map activeMapAddress={activeMapAddress} />
        <ul className="map__addresses">
          {mapAddresses.map((address) => (
            <MapAddressItem address={address} activeAddress={activeIdAddress} key={address.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MapAddressList;
