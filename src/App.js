import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Gallery from './components/Gallery/Gallery';
import Carousel2 from './components/Carousel2/Carousel2';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  return (
          
    <div class="bg_container">

        <Nav />
        < Header />
        < Intro />
        < Gallery />
        < Carousel2 />
        < Subscribe />
        < Footer />
      
        
    </div>
  );
}

export default App