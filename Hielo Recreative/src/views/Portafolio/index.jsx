import React from 'react';
import CardImage from '../../components/CardImage';
import WhiteSection from '../../components/WhiteSection';
import portafolio from './portafolio';

export default function Index() {
  const { img1, img2, img3, img4 } = portafolio;

  const header = {
    title:
      'NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA',
    description: 'Morbi maximus justo',
  };

  return (
    <WhiteSection data={header} customStyle={{ height: 1100 }}>
      <CardImage img={img1} />
      <CardImage img={img2} />
      <CardImage img={img3} />
      <CardImage img={img4} />
    </WhiteSection>
  );
}
