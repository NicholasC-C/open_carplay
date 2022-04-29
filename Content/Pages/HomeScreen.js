import { Component } from 'react/cjs/react.production.min';
import { StyleSheet, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Menu_Item from '../Components/_Menu_Item';


export default class HomeScreen extends Component {
  render() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return (
      <View style={styles.container}>
        <View style={styles.flex_container}>
          <Menu_Item title="GPS" nav={this.props.navigation.navigate.bind(this)} />
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
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});