import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'SEARCH_HISTORY';

export async function saveSearchHistory(history: any[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export async function getSearchHistory(): Promise<any[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}