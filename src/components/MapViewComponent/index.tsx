import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

interface Props {
  location: {
    latitude: number;
    longitude: number;
  };
  title: string;
  address: string;
}

export function MapViewComponent({ location, title, address }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title={title} description={address} />
      </MapView>
    </View>
  );
}
