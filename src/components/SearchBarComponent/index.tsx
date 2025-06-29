import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Searchbar, Text, Divider } from 'react-native-paper';

interface Props {
  onPlaceSelect: (placeId: string) => void;
}

export function SearchBarComponent({ onPlaceSelect }: Props) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  return (
    <View style={{ padding: 10 }}>
      <Searchbar
        placeholder="Search places"
        value={''}
        onChangeText={() => {}}
      />
      <FlatList
        data={suggestions}
        keyExtractor={item => item.place_id}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => onPlaceSelect(item.place_id)}>
              <Text style={{ padding: 8 }}>{item.description}</Text>
            </TouchableOpacity>
            <Divider />
          </>
        )}
      />
    </View>
  );
}
