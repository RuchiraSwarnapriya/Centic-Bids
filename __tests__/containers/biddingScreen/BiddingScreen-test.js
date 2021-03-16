import React from 'react';
import renderer from 'react-test-renderer';
import BiddingScreen from "../../../src/containers/biddingScreen/BiddingScreen";


jest.mock('@react-native-firebase/auth');

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("react-redux");

jest.useFakeTimers();



describe('init', () => {
    test('renders correctly', () => {
        const images = [];
        const mockedParams = {
            route: { params: { titile: 'test-title', description: 'test-desc', basePrice: 'test-basePrice', currentBid: 'whatever-id', expTime: 'test-expTime', images: images  } },
            navigation: ''
        };

        const tree = renderer.create(<BiddingScreen {...mockedParams} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});