import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Divider, Card, ActivityIndicator } from 'react-native-paper';
import { SearchBarComponent } from '../../components/SearchBarComponent';
import { MapViewComponent } from '../../components/MapViewComponent';
import { styles } from './styles';

export function HomeScreen() {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);
  async function loadHistory() {}
  async function handlePlaceSelect(placeId: string) {}
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
