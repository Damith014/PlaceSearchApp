import { PlaceSuggestion, PlaceDetails } from '../types/GooglePlacesTypes';

export const mockSuggestions: PlaceSuggestion[] = [
  { place_id: 'mock_petronas', description: 'Petronas Twin Towers, Kuala Lumpur, Malaysia' },
  { place_id: 'mock_kl_tower', description: 'KL Tower, Kuala Lumpur, Malaysia' },
  { place_id: 'mock_batu_caves', description: 'Batu Caves, Selangor, Malaysia' },
];

export const mockPlaceDetailsMap: Record<string, PlaceDetails> = {
  mock_petronas: {
    name: 'Petronas Twin Towers',
    formatted_address: 'Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia',
    geometry: {
      location: {
        lat: 3.1579,
        lng: 101.7113,
      },
    },
  },
  mock_kl_tower: {
    name: 'KL Tower',
    formatted_address: 'Jalan Puncak, Off Jalan P Ramlee, 50250 Kuala Lumpur, Malaysia',
    geometry: {
      location: {
        lat: 3.1528,
        lng: 101.7039,
      },
    },
  },
  mock_batu_caves: {
    name: 'Batu Caves',
    formatted_address: 'Gombak, 68100 Batu Caves, Selangor, Malaysia',
    geometry: {
      location: {
        lat: 3.2379,
        lng: 101.6831,
      },
    },
  },
};