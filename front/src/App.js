import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { postRegistrationApi } from './services/Authentication/Registration';
import { Menu } from './components/Menu';

import HomePage from './screens/website/HomePage';
import Shop from './screens/website/Shop';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
        <div className='App'>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
          <Footer/>
        </div>
      </Router>

  
    </>
  );
}

export default App;
