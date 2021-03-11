import React from 'react';
import Swiper from 'react-native-swiper';
import { View, StyleSheet, Image } from 'react-native'


const ImageSlider = ({images, imageStyle}) => {
    return (
        <Swiper autoplayTimeout={5}
            style={styles.wrapper}
            showsButtons={false}
            loadMinimal={true}
            showsPagination={true}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDotStyle}
            dotStyle={styles.dotStyle}
            loop={true} autoplay={true}
        >
            {images.map((data, index) => {
                return (
                    <View key={index} style={styles.slider}>
                        <Image style={[styles.itemImage,{...imageStyle}]} source={{ uri: data }} />
                    </View>
                )
            })}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    slider: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeDotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#004E94'
    },
    dotStyle: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: '#A5A5A7'
    },
    paginationStyle: {
        bottom: -8
    },
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        width: 120,
        height: 120,
        borderRadius:5
    },
});

export default ImageSlider
