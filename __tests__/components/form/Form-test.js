import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../../../src/components/form/Form';

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

test('renders correctly', () => {
  const tree = renderer.create(<Form type="Test" />).toJSON();
  expect(tree).toMatchSnapshot();
});