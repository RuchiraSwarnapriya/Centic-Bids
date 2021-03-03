import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(key, value)
  } catch (e) {
    console.log(e)
    // saving error
  }
};

export const getData = async (key) => {
  try {
    let val = await AsyncStorage.getItem(key);
    return val;
  } catch (e) {
    console.log(e)
    // get error
  }
};

export const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e)
    // remove error
  }
};
