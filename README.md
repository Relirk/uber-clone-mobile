# Uber Clone (2019)
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Relirk/uber-clone-mobile">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Relirk/uber-clone-mobile">
  
  <a href="https://github.com/Relirk/uber-clone-mobile/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Relirk/uber-clone-mobile">
  </a>

  <a href="https://github.com/Relirk/uber-clone-mobile/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Relirk/uber-clone-mobile">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

:iphone: React Native application Google Maps and Geolocation

- Based on the study of the [Rocketseat video](https://www.youtube.com/watch?v=bg-U0xZwcRk)

###

![Uber](./.github/assets/relirk-uber-mobile.png)

### Tools used:

- [Rect Native](https://reactnative.dev/)
- [React Native Maps](https://github.com/react-native-community/react-native-maps)
- [Axios](https://github.com/axios/axios)

### Setting up your api key

```javascript
// src/components/Search/index.js
query={{
  key: "YOUR_API_KEY",
  language: "pt",
}}

// src/components/Directions/index.js
const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="YOUR_API_KEY"
    strokeWidth={3}
    strokeColor="#222"
  />
);
```

```xml
<!-- AndroidManifest.xml -->
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_API_KEY"/>
```

### Running Locally

```sh
# Install dependencies
yarn install

# Start the metro bundler into a new terminal tab
yarn start

# Start the app android
react-native run-android

# Start the app ios
react-native run-ios --device
```
