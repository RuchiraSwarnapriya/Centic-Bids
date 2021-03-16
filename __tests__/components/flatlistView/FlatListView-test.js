import React from 'react';
import renderer from 'react-test-renderer';
import FlatListView from '../../../src/components/flatListView/FlatlistView';


test('renders correctly', () => {
  const tree = renderer.create(<FlatListView />).toJSON();
  expect(tree).toMatchSnapshot();
});