import logo from './logo.svg';
import './App.css';
import {Menu} from './components/Menu';
import {CarouselD} from './components/Carousel';
import { ShopByItem } from './components/ShopByItem';
import { Newproducts } from './components/Newproducts';
import { Divider } from 'primereact/divider';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
      <Menu/>
      <div className='carousel-container'>
         <CarouselD/>
      </div>
      <div className='product-by-item'>
        <ShopByItem/>  
        <Divider />
        <Newproducts/>
      </div>
      <Footer/>


<div>

</div>


    

    </div>
    </>
  );
}

export default App;
