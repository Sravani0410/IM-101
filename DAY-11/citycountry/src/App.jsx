import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import {City} from "./components/City/City"
import { Country } from './components/Country/Country';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add-city" element={<City></City>}></Route>
        <Route path="/add-country" element={<Country></Country>}></Route>
      </Routes>
    </div>
  );
}

export default App;

  