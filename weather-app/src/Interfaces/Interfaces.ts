export type Weather = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  }
  name: string
  weather: [{
    main: string;
    description: string;
    icon: string;
  }]
  wind: {
    speed: number;
    deg: number;
  }
};

export type LatLon = {
  data: [{
    lat: number;
    lon: number;
  }]
};