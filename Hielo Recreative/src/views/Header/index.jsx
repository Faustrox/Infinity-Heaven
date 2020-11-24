import React, { useState } from 'react';
import './style.scss';

export default function Index() {
  const [isAfterHeader, setIsAfterHeader] = useState(false);

  window.addEventListener('scroll', (e) => {
    setIsAfterHeader(window.scrollY >= 815);
  });

  const styleAfterScroll = {
    background: isAfterHeader ? 'black' : '',
    position: isAfterHeader ? 'fixed' : 'absolute',
  };

  return (
    <header id="header" style={styleAfterScroll}>
      <section className="container">
        <h4 className="title">
          Hielo <span> by TEMPLATED</span>
        </h4>
      </section>
    </header>
  );
}
