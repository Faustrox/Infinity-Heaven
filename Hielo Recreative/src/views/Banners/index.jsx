import React, { useState, useEffect } from 'react';
import banners from './banners.js';
import './style.scss';
import Header from '../Header';

export default function Index() {
  const [indicator, setIndicator] = useState(1);

  const createBanner = (bannerNumber) => {
    const { title, content, image } = banners[bannerNumber];

    const style = {
      backgroundImage: `url(${image})`,
      backgroundPosition: `center 0px`,
    };

    return (
      <article className="banner" style={style}>
        <Header />
        <header className="header">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-description">{content}</p>
        </header>
      </article>
    );
  };

  const changePointSelected = (dotNumber) => {
    setIndicator(dotNumber);
  };

  const createPoints = (selected) => {
    return banners.map((banner, indx) => {
      const isSelected = indx === selected - 1;

      return (
        <li
          key={indx}
          className={`dot${isSelected ? '-selected dot' : ''}`}
          onClick={() => changePointSelected(indx + 1)}
        ></li>
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndicator(indicator === banners.length ? 1 : indicator + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [indicator]);

  return (
    <section id="banners">
      {createBanner(indicator - 1)}
      <ul className="scroll-points">{createPoints(indicator)}</ul>
    </section>
  );
}
