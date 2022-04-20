import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu_Item from './Components/Menu_Item';
//import { NavigationContainer } from '@react-navigation/native';

export default function App() {
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flex_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  }
});
