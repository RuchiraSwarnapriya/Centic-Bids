import React from 'react';
import renderer from 'react-test-renderer';
import AppHeader from '../../../src/components/appHeader/Header';


test('renders correctly', () => {
  const tree = renderer.create(<AppHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});