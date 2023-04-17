import axios, { AxiosResponse } from "axios"
import { LatLon, Weather } from "../Interfaces/Interfaces";

export class WeatherService {
  static getCurrentWeather(city: string) : Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&lang=ru&units=metric&appid=be09b1bff34541a89fd7080e2244c47d`
    );
  }
}