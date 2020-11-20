import React from 'react';
import './style.scss';

export default function WhiteSection(props) {
  const { data, children, customStyle } = props;

  return (
    <section
      id="white-section"
      className="center"
      style={{ ...customStyle }}
    >
      {data && (
        <header className="center header" style={{ marginTop: 0 }}>
          <h2 className="header-title">{data.title}</h2>
          <p className="header-description">{data.description}</p>
        </header>
      )}
      <section className="card-container">
        {children.map((component, indx) =>
          indx < 2 ? component : ''
        )}
      </section>
      <section className="card-container">
        {children.map((component, indx) =>
          indx >= 2 ? component : ''
        )}
      </section>
    </section>
  );
}
