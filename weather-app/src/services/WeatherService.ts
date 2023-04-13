import axios, { AxiosResponse } from "axios"
import { LatLon, Weather } from "../store/types/types";
import api from "../axios";

export class WeatherService {
  static getCurrentLatLon(city: string) : Promise<AxiosResponse<LatLon>> {
    return axios.get<LatLon>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=be09b1bff34541a89fd7080e2244c47d`
    );
  }

  static getCurrentWeather(lat: number, lon: number) : Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=be09b1bff34541a89fd7080e2244c47d`
      );
  }
}