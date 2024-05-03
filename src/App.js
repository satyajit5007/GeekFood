import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen.js'
import QuoteScreen from './screens/QuoteScreen.js';
import RestrauntsScreen from './screens/RestrauntsScreen.js';
import FoodsScreen from "./screens/FoodsScreen.js"
import ContactScreen from './screens/ContactScreen.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTemplate from './components/AppTemplate.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppTemplate/>}>
            <Route path='' element= {<LandingScreen/>}/>
            <Route path='quotes' element={<QuoteScreen/>}/>
            <Route path='restraunts' element= {<RestrauntsScreen/>} />
            <Route path='foods' element={<FoodsScreen/>} />
            <Route path='contact' element={<ContactScreen/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
