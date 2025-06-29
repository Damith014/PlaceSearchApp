import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Text, Divider, Card, ActivityIndicator } from 'react-native-paper';
import { SearchBarComponent } from '../../components/SearchBarComponent';
import { MapViewComponent } from '../../components/MapViewComponent';
import { styles } from './styles';
import {
  getSearchHistory,
  saveSearchHistory,
} from '../../storage/SearchHistory';
import { fetchPlaceDetails } from '../../api/googlePlacesApi';

export function HomeScreen() {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const storedHistory = await getSearchHistory();
      setHistory(storedHistory);
    } catch (error) {
      Alert.alert('Error', 'Failed to load search history.', [{ text: 'OK' }]);
    }
  }

  async function handlePlaceSelect(placeId: string) {
    setLoading(true);
    try {
      const place = await fetchPlaceDetails(placeId);
      const newPlace = {
        placeId,
        name: place.name,
        address: place.formatted_address,
        location: {
          latitude: place.geometry.location.lat,
          longitude: place.geometry.location.lng,
        },
      };

      setSelectedPlace(newPlace);
      const updatedHistory = [
        newPlace,
        ...history.filter(p => p.placeId !== placeId),
      ];
      setHistory(updatedHistory);
      await saveSearchHistory(updatedHistory);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load place details.', [
        { text: 'OK' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <SearchBarComponent onPlaceSelect={handlePlaceSelect} />
        {loading && (
          <ActivityIndicator animating={true} style={styles.activity} />
        )}
        {selectedPlace && (
          <View style={{ flex: 1 }}>
            <MapViewComponent
              location={selectedPlace.location}
              title={selectedPlace.name}
              address={selectedPlace.address}
            />
          </View>
        )}
        <Text style={styles.searchtitle}>Search History</Text>
        <Divider />
        <FlatList
          data={history}
          keyExtractor={item => item.placeId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePlaceSelect(item.placeId)}>
              <Card style={styles.card}>
                <Card.Title title={item.name} subtitle={item.address} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
