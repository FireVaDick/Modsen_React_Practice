export type IWeather = {
  lat: number, 
  lon: number,
  temp: number, 
  feels_like: number, 
  temp_min: number, 
  temp_max: number,
  pressure: number, 
  humidity: number, 
  name: string, 
  dt: number, 
  country: string, 
  sunrise: number, 
  sunset: number, 
  details: string;
  description: string;
  speed: number, 
  deg: number,
  daily: {
    time: [string],
    weathercode: [number],
    temperature_2m_max: [number],
    temperature_2m_min: [number],
    precipitation_probability_max: [number],
    windspeed_10m_max: [number]
  }
  hourly: {
    time: [string],
    temperature_2m: [number],
    relativehumidity_2m: [number],
    windspeed_10m: [number],
    weathercode: [number],
  }
};

export interface IDay {
  day: string,
  date: string,
  icon_id: string,
  temp_max: string,
  temp_min: string,
  precipitation_prob: string,
  windspeed_max: string
}

export interface IHour {
  time: string, 
  icon_id: string,
  temp: string, 
  humidity: string, 
  speed: string
}

export interface IItem {
  icon_id: string,
  name: string,
  value: string
}