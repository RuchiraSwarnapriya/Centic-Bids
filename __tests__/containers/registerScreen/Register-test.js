import React from 'react';
import renderer from 'react-test-renderer';
import RegisterScreen from "../../../src/containers/registerScreen/RegisterScreen";

jest.mock('@react-native-firebase/auth');

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

test('renders correctly', () => {
    const tree = renderer.create(<RegisterScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});