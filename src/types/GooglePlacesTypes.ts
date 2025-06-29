export interface PlaceSuggestion {
  place_id: string;
  description: string;
}

export interface PlaceDetails {
  name: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}