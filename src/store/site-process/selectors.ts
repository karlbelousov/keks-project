import { NameSpace } from '../../const';
import { MapAddress } from '../../types/map-address';
import { State } from '../../types/state';

export const getMapAdresses = ({ [NameSpace.SiteProcess]: SITE_PROCESS }: State): MapAddress[] => SITE_PROCESS.mapAddresses;
export const getIdActiveAddress = ({ [NameSpace.SiteProcess]: SITE_PROCESS }: State): MapAddress['id'] => SITE_PROCESS.activeIdMapAddress;
