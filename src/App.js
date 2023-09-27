import './App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Artwork2D from './pages/Artwork2D';
import Artwork3D from './pages/Artwork3D';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />

      <BrowserRouter>
        <Routes>
          <Route path='/trinitite-portfolio' element={<Main />} />
          <Route path='/trinitite-portfolio/artwork2d' element={<Artwork2D />} />
          <Route path='/trinitite-portfolio/artwork3d' element={<Artwork3D />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
