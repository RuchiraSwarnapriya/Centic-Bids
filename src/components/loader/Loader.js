import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from "../../assets/colors";
import styles from "./styles";

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={Colors.blue} />
    </View>
  );
}



export default Loader