import React from 'react';
import './style.scss';

export default function Card(props) {
  const { header, paragraph, btnText, img } = props.data;

  return (
    <section className="card">
      <img src={img} className="img-card" />
      <section className="card-content">
        <header className="center header">
          <h2 className="header-title">{header.title}</h2>
          <p className="header-description">{header.description}</p>
        </header>
        <article className="center">
          <p className="paragraph">{paragraph}</p>
          <footer>
            <p className="btn">{btnText}</p>
          </footer>
        </article>
      </section>
    </section>
  );
}
