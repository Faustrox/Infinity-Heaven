import React from 'react';
import './style.scss';

export default function Index() {
  return (
    <section id="background-content2" className="banner">
      <header className="header" style={{ marginTop: 20 }}>
        <h2
          className="banner-title"
          style={{ paddingBottom: 15.5, opacity: 0.7 }}
        >
          Un ejemplo de una descripcion
        </h2>
        <p className="banner-description" style={{ fontSize: 28 }}>
          Un ejemplo de un titulo
        </p>
      </header>
    </section>
  );
}
