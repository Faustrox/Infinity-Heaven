import React from 'react';
import WhiteSection from '../../components/WhiteSection';
import Card from '../../components/Card';
import content from './content';

export default function Index() {
  const { one, two } = content;

  return (
    <WhiteSection>
      <Card data={one} />
      <Card data={two} />
    </WhiteSection>
  );
}
