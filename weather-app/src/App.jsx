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

    
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Ваше текущее местоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  
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
