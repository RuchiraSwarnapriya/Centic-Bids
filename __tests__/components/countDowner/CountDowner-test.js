import React from 'react';
import renderer from 'react-test-renderer';
import CountDowner from '../../../src/components/countDowner/CountDowner';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<CountDowner />).toJSON();
  expect(tree).toMatchSnapshot();
});