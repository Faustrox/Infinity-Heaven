import React from 'react';

export default function CardImage(props) {
  return (
    <section className="card-image">
      <img
        src={props.img}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </section>
  );
}
