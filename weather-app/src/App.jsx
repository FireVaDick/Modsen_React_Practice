import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';
import getFormattedWeatherData from './services/WeatherService'

function App() {
  const [city, setCity] = useState({q: 'Могилёв'});
  const [popupActive, setPopupActive] = useState(false);
  const [weather, setWeather] = useState(null);
    
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...city}).then((data) => {
          setWeather(data);
        });
      console.log("city with weather");
      console.log(city);
    }
    
    fetchWeather();
  }, [city])

  return (
    <div className="global-container">    
      <Popup weather={weather} popupActive={popupActive} setPopupActive={setPopupActive}/>
      <div className="container">      
        <Header city={city} setCity={setCity}/>
        <Routes>
          <Route path="/" element={<Home city={city} weather={weather} setWeather={setWeather} popupActive={popupActive} setPopupActive={setPopupActive}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
