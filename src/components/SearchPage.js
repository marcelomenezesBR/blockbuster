import MovieApp from './MovieApp';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


function SearchPage() {
  return (
    <div className="App">
    <Header/>
    <MovieApp/>
    <Footer/>    
  </div>
  );
}

export default SearchPage;
