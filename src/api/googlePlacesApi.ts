import axios from 'axios';
import { GOOGLE_API_KEY, USE_API_MOCK } from '@env';
import { mockSuggestions, mockPlaceDetailsMap } from './mockData';
import { PlaceSuggestion, PlaceDetails } from '../types/GooglePlacesTypes';

const isMock = USE_API_MOCK;

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchPlaceSuggestions(input: string): Promise<PlaceSuggestion[]> {
  if (isMock) {
    await delay(300);
    return mockSuggestions.filter(item =>
      item.description.toLowerCase().includes(input.toLowerCase())
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    return response.data.predictions;
  } catch (error) {
    throw new Error('Failed to fetch suggestions.');
  }
}

export async function fetchPlaceDetails(placeId: string): Promise<PlaceDetails> {
  if (isMock) {
    await delay(300);
    const mockDetails = mockPlaceDetailsMap[placeId];
    if (mockDetails) return mockDetails;
    throw new Error('Mock place ID not found.');
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    throw new Error('Failed to fetch place details.');
  }
}