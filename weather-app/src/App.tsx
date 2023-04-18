import {useState} from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';

function App() {
  const [city, setCity] = useState({q: 'Могилёв'});
  const [popupActive, setPopupActive] = useState(false);

  return (
    <div className="global-container">    
      <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
      <div className="container">      
        <Header city={city} setCity={setCity}/>
        <Routes>
          <Route path="/" element={<Home city={city} popupActive={popupActive} setPopupActive={setPopupActive}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
