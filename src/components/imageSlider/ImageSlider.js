import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Image } from 'react-native';
import NoPerview from "../../assets/images/no_preview.png";
import styles from "./styles";


const ImageSlider = ({ images, imageStyle }) => {
    if (images.length == 0) {
        return (
            <View style={styles.wrapper}>
                <View style={styles.slider}>
                    <Image style={[styles.itemImage, { ...imageStyle }]} source={NoPerview} />
                </View>
            </View>
        )
    } else {
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
                            <Image style={[styles.itemImage, { ...imageStyle }]} source={{ uri: data }} />
                        </View>
                    )
                })}
            </Swiper>
        )
    }
}



export default ImageSlider
