import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Advertise from './Advertise';

function App() {
  return (

    <div>

      <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<> <Navbar/> <Home/> <Footer/> </>}></Route>
        <Route path='/Advertise' element={<> <Navbar/> <Advertise/> <Footer/> </>}></Route>


      </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
