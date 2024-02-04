import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reservations from './pages/Reservations';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reserve' element={<Reservations />} />
    </Routes>
  );
}

export default App;
