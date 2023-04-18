import { WeatherService } from "../../services/WeatherService"
import { AppDispatch } from "../store"
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { LatLon } from "../../Interfaces/Interfaces";

export const fetchCurrentWeather = 
  (city: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather)

      const currentWeather = await WeatherService.getCurrentWeather(city);      
      console.log(currentWeather)

      const lat = currentWeather.data.coord.lat;
      const lon = currentWeather.data.coord.lon;

      const dailyHourlyWeather = await WeatherService.getCurrentWeather(city); 
      console.log(dailyHourlyWeather)

      if (currentWeather.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(currentWeather))    
      }
      else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(currentWeather))    
      }
    }
    catch (error) {
      console.log(error)
    }
}