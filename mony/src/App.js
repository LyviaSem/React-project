import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { StoreContextProvider } from './contexts/store.context';

function App() {
  return (
      <div className='App'>
        <StoreContextProvider>

        <Header />
        <Outlet />
        </StoreContextProvider>
      </div>
  );
}

export default App;
