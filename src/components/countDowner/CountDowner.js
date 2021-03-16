import React from 'react';
import CountDown from 'react-native-countdown-component';

const CountDowner = ({ remaningTime, size }) => {
    return (
        <CountDown
            until={remaningTime}
            size={size}
        />
    )
}

export default CountDowner
