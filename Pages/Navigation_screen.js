import { Component } from 'react/cjs/react.production.min';
import { StyleSheet, Text, View } from 'react-native';

export default class Navigation_screen extends Component{
    render () {
    return (
        <View style={styles.container}>
            <Text>hey</Text>
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