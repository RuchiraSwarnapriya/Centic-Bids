import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from "../../assets/colors";

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={Colors.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loader