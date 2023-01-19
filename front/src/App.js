import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { postRegistrationApi } from './services/Authentication/Registration';
import HomePage from './screens/website/HomePage';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
    <Router>
        <div className='App'>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>

      {/* <button onClick={()=>{postRegistrationApi(  {
    "name": "login",
    "email": "login@gmail.com",
    "password":"login123",
    "isAdmin": true
  })}}> login</button> */}
    

    </>
  );
}

export default App;
