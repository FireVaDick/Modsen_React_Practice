import axios, { AxiosResponse } from "axios"
import { Weather } from "../Interfaces/Interfaces";

const API_KEY = "be09b1bff34541a89fd7080e2244c47d"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

export class WeatherService {
  static getCurrentWeather(city: string) : Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>(
      `${BASE_URL}q=${city}&limit=5&lang=ru&units=metric&appid=${API_KEY}`
    );
  }
}