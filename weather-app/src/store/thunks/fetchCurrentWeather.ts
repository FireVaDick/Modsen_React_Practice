import { WeatherService } from "../../services/WeatherService"
import { AppDispatch } from "../store"
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { LatLon } from "../types/types";

export const fetchCurrentWeather = 
  (city: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather)

      const latlon: any = await WeatherService.getCurrentLatLon(city);
      const res = await WeatherService.getCurrentWeather(latlon.data[0].lat , latlon.data[0].lon);
      
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))    
      }
      else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))    
      }
    }
    catch (error) {
      console.log(error)
    }
}