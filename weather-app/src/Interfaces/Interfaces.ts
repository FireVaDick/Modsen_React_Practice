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
    time: [string, string, string, string, string, string, string],
    weathercode: [number, number, number, number, number, number, number],
    temperature_2m_max: [number, number, number, number, number, number, number],
    temperature_2m_min: [number, number, number, number, number, number, number],
    precipitation_probability_max: [number, number, number, number, number, number, number],
    windspeed_10m_max: [number, number, number, number, number, number, number]
  }
  hourly: {
    time: [string, string, string, string, string, string, string],
    temperature_2m: [number, number, number, number, number, number, number],
    relativehumidity_2m: [number, number, number, number, number, number, number],
    windspeed_10m: [number, number, number, number, number, number, number],
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
  temp: string, 
  humidity: string, 
  speed: string
}

export interface IItem {
  icon_id: string,
  name: string,
  value: string
}