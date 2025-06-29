import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Searchbar, Text, Divider } from 'react-native-paper';
import { debounce } from '../../utils/debounce';
import { fetchPlaceSuggestions } from '../../api/googlePlacesApi';

interface Props {
  onPlaceSelect: (placeId: string) => void;
}

export function SearchBarComponent({ onPlaceSelect }: Props) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const debouncedFetchSuggestions = useCallback(
    debounce(async (text: string) => {
      if (text.length > 2) {
        const results = await fetchPlaceSuggestions(text);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedFetchSuggestions(query);
  }, [query, debouncedFetchSuggestions]);

  return (
    <View style={{ padding: 10 }}>
      <Searchbar
        placeholder="Search places"
        value={query}
        onChangeText={setQuery}
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
