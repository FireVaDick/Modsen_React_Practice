import {useState} from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';

function App() {
  const [popupActive, setPopupActive] = useState(false);

  console.log("popupActive " + popupActive)

  return (
    <div className="global-container">    
      <Popup popupActive={popupActive} setPopupActive={setPopupActive}/>
      <div className="container">      
        <Header/>
        <Routes>
          <Route path="/" element={<Home popupActive={popupActive} setPopupActive={setPopupActive}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
