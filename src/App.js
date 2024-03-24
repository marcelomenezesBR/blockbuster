import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import MovieApp from './components/MovieApp';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieApp />
      <Footer />
    </div>
  );
}

export default App;
