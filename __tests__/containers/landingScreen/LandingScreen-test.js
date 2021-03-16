import React from 'react';
import renderer from 'react-test-renderer';
import LandingScreen from "../../../src/containers/landingScreen/LandingScreen";

jest.mock('@react-native-firebase/auth');

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

test('renders correctly', () => {
    const tree = renderer.create(< LandingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});