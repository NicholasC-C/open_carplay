import { Component } from 'react/cjs/react.production.min';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Menu_Item from '../Components/Menu_Item';
export default class Home extends Component{
    render () {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    console.log(ScreenOrientation.getOrientationAsync());
    return (
        <View style={styles.container}>
            <View style={styles.flex_container}>
            <Menu_Item></Menu_Item>
            <Menu_Item></Menu_Item>
            </View>
            <View style={styles.flex_container}>
            <Menu_Item></Menu_Item>
            <Menu_Item></Menu_Item>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    flex_container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 50,
    }
  });