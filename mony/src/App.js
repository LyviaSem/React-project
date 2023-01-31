import logo from './logo.svg';
import './App.css';
import Panier from "./pages/Panier/Panier";
import Home from "./pages/Home/Home";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className='App'>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
