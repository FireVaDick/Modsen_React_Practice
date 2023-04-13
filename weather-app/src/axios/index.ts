import axios from "axios";
import { config } from "process";

const api = axios.create( {
  baseURL: 'http://api.openweathermap.org/geo/1.0/direct?'
})

api.interceptors.request.use(config => {
  config.url = config.url + `appid=` + 
  'be09b1bff34541a89fd7080e2244c47d';

  return config;
})

export default api;