import './App.scss';
import Artwork2D from './components/Artwork2D';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/trinitite-portfolio' element={<Main />} />
        <Route path='/trinitite-portfolio/artwork2d' element={<Artwork2D />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
