import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          {/* path setting for resturent list */}
          <Route path='/' element={<Restaurantlist />} />
          {/* path setting for view resta*/}
          <Route path='/view-restaurant/:id' element={<View/>}/>

         
        </Routes>

        <Footer />
      </Router>



    </div>
  );
}

export default App;
