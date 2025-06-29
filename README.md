# 📍 PlaceSearchApp

A React Native app integrating Google Maps Places API for location search, map display, and persistent search history. Built to showcase advanced React Native skills with a focus on clean UI, performance, and maintainable code.

- 🗺️ **Map display**
- 🏙️ **Search Autocomplete**
- ✅ **Search History (AsyncStorage)**
- 🎨 **React Native Paper UI**
- 🔐 **Google API integration (with `.env`)**
- 🧪 **Mock API Mode (for offline testing)**
- 🚨 **Error handling with Alerts and Snackbar**

---

## ✨ Features

- 🔍 Google Places Autocomplete
- 📌 Show selected place on Map
- 🕑 Save Search History locally
- 💡 Environment-based Mock API Mode
- ✅ Fully TypeScript
- ✅ React Native Paper for UI
- ✅ Supports iOS and Android

---

## 📂 Project Structure

```
src/
├── api/
│   └── googlePlacesApi.ts
├── components/
│   ├── SearchBarComponent.tsx
│   └── MapViewComponent.tsx
├── screens/
│   └── HomeScreen.tsx
├── storage/
│   └── SearchHistory.ts
├── utils/
│   └── debounce.ts
├── types/
│   └── GooglePlacesTypes.ts
```

---

## 🛠️ Installation

### Prerequisites:

- Node.js
- NPM or Yarn
- Xcode (for iOS)
- Android Studio (for Android)

---

### Setup:

```bash
git clone https://github.com/your-username/PlaceSearchApp.git
cd PlaceSearchApp
npm install
npx pod-install
```

---

## 🗝️ Environment Variables

Create a `.env` file:

```dotenv
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
USE_API_MOCK=true
```

- `GOOGLE_API_KEY`: Your real Google Places API key.
- `USE_API_MOCK`: Set to `true` for mock mode (offline testing).

---

## 🚀 Running the App

### Android:

```bash
npx react-native run-android
```

### iOS:

```bash
npx react-native run-ios
```

---

## 🧪 Mock Mode

Set in `.env`:

```dotenv
USE_API_MOCK=true
```

✅ App will load **realistic mock places like Petronas Towers, KL Tower, Batu Caves**, etc.

---

## ✅ Error Handling Example

- API failure shows:
  - **React Native Alert Popup**
- Offline? → Switch to **Mock Mode**

---

## 📚 Technologies Used

- React Native CLI
- TypeScript
- React Native Paper
- Axios
- AsyncStorage
- react-native-maps
- Google Places API
- react-native-dotenv

---

## 🧑‍💻 Author

- Damith Bandara

---

## ⭐️ License

This project is licensed under the MIT License.
