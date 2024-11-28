import { ChangeEvent } from 'react';
import { MapAddress } from '../../types/map-address';
import { useAppDispatch } from '../../hooks';
import { setActiveIdMapAddress } from '../../store/site-process/site-process';

type MapAddressProps = {
  address: MapAddress;
  activeAddress: MapAddress['id'];
}

function MapAddressItem({address, activeAddress}: MapAddressProps) {
  const dispatch = useAppDispatch();
  const handleMapAddressInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveIdMapAddress(+e.target.value));
  };

  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          id={`user-agreement-id-${address.id}`}
          name="user-agreement"
          onChange={handleMapAddressInputChange}
          defaultValue={address.id}
          defaultChecked={address.id === activeAddress}
        />
        <label className="custom-toggle__label" htmlFor={`user-agreement-id-${address.id}`}>
          {address.title}
        </label>
        <address className="custom-toggle__address">
          {address.address}
          <svg
            className="custom-toggle__icon"
            width={26}
            height={24}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-keks-footprint" />
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAddressItem;
