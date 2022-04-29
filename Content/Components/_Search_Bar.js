import { StyleSheet, View, Button } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

const API_KEY = "AIzaSyAJrBp_r_DKcnMSklHyY9S86_7m-uuIF40";

class _Search_Bar extends Component {
    render() {
        return (
            <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, height: '100%' }}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details.geometry.location);
                    }}
                    styles={{ textInput: styles.text }}
                    query={{
                        key: API_KEY,
                        language: 'en',
                    }}
                    onFail={error => console.error(error)}
                    textInputProps={{
                        showSoftInputOnFocus: true,
                        disableFullscreenUI: true,
                    }}
                />
                <Button title="hey" onPress={() => this.navigate_by_coordinate(this.props.latitude + "," + this.props.longitude, "12.568445,55.695100")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
text: {
  fontSize: 15,
}});

export default _Search_Bar;