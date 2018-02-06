import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyComponent = () => (
  <div className="parallel">
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./para.JPG')}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '1200px' }} />
    </Parallax>
  </div>
);
export default MyComponent;
