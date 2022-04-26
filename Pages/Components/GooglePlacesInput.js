import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

const API_KEY = "AIzaSyAJrBp_r_DKcnMSklHyY9S86_7m-uuIF40";

const GooglePlacesInput = () => {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, height: '100%' }}>
            <GooglePlacesAutocomplete 
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                styles={{ textInput: styles.text }}
                query={{
                    key: API_KEY,
                    language: 'en',
                }}
                onFail={error => console.error(error)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '200%',
    },
    text: {
        backgroundColor: "#eee",
        marginVertical: 5,
    }
});

export default GooglePlacesInput;