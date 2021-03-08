import React from 'react';
import CountDown from 'react-native-countdown-component';

const CountDowner = ({remaningTime, onFinish, size}) => {
    return (
        <CountDown
            until={remaningTime}
            onFinish={onFinish}
            size={size}
        />
    )
}

export default CountDowner
