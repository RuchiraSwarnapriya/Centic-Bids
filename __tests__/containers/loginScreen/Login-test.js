import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from "../../../src/containers/loginScreen/LoginScreen";

jest.mock('@react-native-firebase/auth');

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

test('renders correctly', () => {
    const tree = renderer.create(< LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});