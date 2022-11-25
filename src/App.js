import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleContainer from './components/TitleContainer';
import CarouselOfMovies from './components/CarouselOfMovies';

function App() {
  return (
    <div className="App">
            <NavBar/>
      <header className="App-header">
    <TitleContainer/>
    <CarouselOfMovies title="Home Alone"/>
    <CarouselOfMovies title="Lord of the Rings"/>
    <CarouselOfMovies title="Saw"/>
      </header>
    </div>
  );
}

export default App;
