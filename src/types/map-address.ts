export type MapAddress = {
  id: number;
  title: string;
  address: string;
  type: TypeAddress;
  coords: Coords;
};

export type Coords = {
    lat: number;
    lng: number;
};

export type TypeAddress = 'confectionery' | 'production'
