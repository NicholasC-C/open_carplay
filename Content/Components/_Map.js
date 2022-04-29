import { StyleSheet, View, Dimensions, PermissionsAndroid } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import _Location from './_Location';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class _Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      markers: [],
    };
  }

  render() {
    return (
      <View>
        <MapView
          provider='google'
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
/*          onMapReady={() => {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(granted => {
            });
          }} */
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          <Marker
            coordinate={this.state.a}
          />
          {this.state.markers.map(marker => (
            <Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

_Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('window').height
  },
});