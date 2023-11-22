import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Header from './Component/Header';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Allproducts from './Component/Allproducts';
import Product from './Component/Product';


function App() {
  return (
    <div className="App">
     <Grid>
      
      <Header/>
     <Routes>
      <Route path='/' element={<Allproducts/>}></Route>
      <Route path='/product/:id' element={<Product/>}></Route>
     </Routes>
     </Grid>
     
    </div>
  );
}

export default App;
