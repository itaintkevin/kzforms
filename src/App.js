import Hero from './components/Hero.jsx';
import FormDetails from './components/FormDetails.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='w-screen bg-svgbg'>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/successfull" element={<FormDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
