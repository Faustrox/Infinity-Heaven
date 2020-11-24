import React from 'react';
import './App.scss';
import Content from './views/Content';
import ContentTwo from './views/ContentTwo';
import Banners from './views/Banners';
import Portafolio from './views/Portafolio';
import Footer from './views/Footer';

const App = () => {
  return (
    <div className="App">
      <Banners />
      <Content />
      <ContentTwo />
      <Portafolio />
      <Footer />
    </div>
  );
};

export default App;
