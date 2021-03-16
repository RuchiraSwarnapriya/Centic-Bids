import React from 'react';
import renderer from 'react-test-renderer';
import ImageSlider from '../../../src/components/imageSlider/ImageSlider';


const images = [
]

test('renders correctly', () => {
  const tree = renderer.create(<ImageSlider images={images} />).toJSON();
  expect(tree).toMatchSnapshot();
});