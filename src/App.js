import logo from './logo.svg';
import './App.css';

import SearchPage from './components/SearchPage';
import MovieDetails from './components/MovieDetails';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie" element={<SearchPage />} />      
      <Route path="/movie/:imdbId" element={<MovieDetails />} />
    </Routes>

  );
}

export default App;
