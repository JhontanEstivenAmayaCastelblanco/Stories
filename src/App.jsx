import './App.css'; 
import NabVar from './components/nabvar';
import { Route, Routes } from 'react-router-dom';
import Slider from './components/slider';


function App() {
  return (
    <div>
    <Routes>
  <Route path='/' element={<NabVar/>} >
      <Route path='a' element={<Slider/>} />
  </Route>
    </Routes>
  </div>

  );
}

export default App;
