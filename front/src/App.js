import logo from './logo.svg';
import './App.css';
import {Menu} from './components/Menu';
import {CarouselD} from './components/Carousel';
function App() {
  return (
    <>
    <div className="App">
      <Menu/>
      <div className='carousel-container'>
         <CarouselD/>

      </div>

    </div>
    </>
  );
}

export default App;
