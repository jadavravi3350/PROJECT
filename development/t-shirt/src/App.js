import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { createContext, useState } from 'react';
import Regitration from './Regitration';
import Content1 from './Content1';
import WomensCart from './WomensCart';
import WomenAddcart from './WomenAddcart';
import NewCart from './NewCart';
import NewAddCart from './NewAddCart';
import MenCart from './MenCart';
import MenAddCart from './MenAddCart';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
import Payment from './Payment';

export const contexts = createContext();
var array = [
 
];

function App() {
 const [login,setlogin] = useState(true);
 const [name,setname] = useState();
 const [AddCart,setAddCart] = useState(array);

  return (
    <div>
      <contexts.Provider value={{login,name,setlogin,setname,setAddCart,AddCart}}>
      <BrowserRouter>
     
      <Routes>
        <Route path='/log' element={<Login/>}></Route>
        <Route path='/' element={<> <Navbar/> <Content1/> <Content2/> <Content3/> <Footer/></>}></Route>
        <Route path='/regi' element={<><Regitration/></>}></Route>
        <Route path='/women' element={<> <Navbar/> <WomensCart/> <Footer/></>}></Route>
        <Route path='/womenadd/:id' element={<> <Navbar/> <WomenAddcart/> <Footer/></>}></Route>
        <Route path='/new' element={<> <Navbar/> <NewCart/> <Footer/></>}></Route>
        <Route path='/new/:id' element={<> <Navbar/> <NewAddCart/> <Footer/></>}></Route>
        <Route path='/men' element={<> <Navbar/> <MenCart/> <Footer/></>}></Route>
        <Route path='/men/:id' element={<> <Navbar/> <MenAddCart/> <Footer/></>}></Route>
        <Route path='/pay' element={<> <Navbar/> <Payment/> <Footer/></>}></Route>

      </Routes>
      </BrowserRouter>
      </contexts.Provider>
     
     
    </div>
  );
}

export default App;
