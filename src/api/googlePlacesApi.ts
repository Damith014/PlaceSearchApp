import axios from 'axios';
import { GOOGLE_API_KEY } from '@env';

export async function fetchPlaceSuggestions(input: string) {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${GOOGLE_API_KEY}`;
  const response = await axios.get(url);
  return response.data.predictions;
}

export async function fetchPlaceDetails(placeId: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`;
  const response = await axios.get(url);
  return response.data.result;
}