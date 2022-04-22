import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

export default class Menu_Item extends Component {
  render() {
    return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Menu</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 370,
    height: 100,
    alignItems: 'center'
    
  },
  button: {
    backgroundColor: 'red',
    color: 'blue',
    width: 300,
    height: 160,
    justifyContent: 'center',
  },
  text: {
    fontSize: 75,
    textAlign: 'center',
  }
});