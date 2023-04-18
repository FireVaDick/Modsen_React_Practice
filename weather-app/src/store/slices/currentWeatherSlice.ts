import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../../Interfaces/Interfaces';


type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: WeatherResponse;
}

type WeatherResponse = {
  status: number;
  message: string;
}

const initialState: CurrentWeather = {
  weather: {
    coord: {
      lat: 0,
      lon: 0,
    },
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: '',
    weather: [{
      main: '',
      description: '',
      icon: '',
    }],
    wind: {
      speed: 0,
      deg: 0,
    }
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  }
}

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: { // Мутирую state
    fetchCurrentWeather(state) {
      state.isLoading = true; 
    },
    fetchCurrentWeatherSuccess(
      state, 
      action: PayloadAction<AxiosResponse<Weather>>) 
      {
        state.isLoading = false; 
        state.weather = action.payload.data;           
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText
        }
      },
    fetchCurrentWeatherError(
      state, 
      action: PayloadAction<AxiosResponse<Weather>>) 
      {
        state.isLoading = false; 
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText
        }
      }
    }
})

export default currentWeatherSlice.reducer;