
# RealEstateUnlockApp

This project is a real estate app that allows users to view houses, their descriptions, and interact with location-based features such as unlocking homes when nearby.

## Dependencies

- **React Native**: The main framework for building the mobile app.
- **Expo CLI**: A set of tools built around React Native to facilitate development.
- **React Query**: Used for fetching and managing data.
- **Axios**: To make HTTP requests to fetch data from the mock API.
- **Expo Location**: Used to get the user's current location and check proximity to the home.
- **Json-Server**: A lightweight mock API server for testing.

### Install Dependencies

1. **Install Expo CLI** globally if you haven’t done so already:

   ```bash
   npm install -g expo-cli
   ```

2. **Install project dependencies**:

   Once you've cloned or downloaded the repository, navigate to the project directory and install the dependencies:

   ```bash
   npm install
   ```

3. **Install `expo-location`** to access location services:

   ```bash
   expo install expo-location
   ```

4. **Install `react-query`** for data fetching and state management:

   ```bash
   npm install react-query
   ```

5. **Install `axios`** for making API requests:

   ```bash
   npm install axios
   ```

---

## Running the App

### Running the Mock API (Json Server)

To run the mock API, follow these steps:

1. **Install json-server** globally:

   ```bash
   npm install -g json-server
   ```

2. **Create a `db.json` file** in the root of your project directory (or use the provided one) with your mock data.

   Example `db.json` (replace with your data):

   ```json
   {
     "houses": [
       {
         "id": "1",
         "description": "A beautiful house located in the heart of the city.",
         "imagerUrl": "https://loremflickr.com/640/480/city",
         "latitude": "21.0193",
         "longitude": "33.8171",
         "address": "123 City Avenue, Cityville"
       },
       {
         "id": "2",
         "description": "A cozy suburban home with a large backyard.",
         "imagerUrl": "https://loremflickr.com/640/480/city",
         "latitude": "-41.4618",
         "longitude": "164.1386",
         "address": "456 Suburb Street, Suburbia"
       }
     ]
   }
   ```

3. **Run json-server**:

   ```bash
   json-server --watch db.json --port 3000
   ```

   This will run a mock API at `http://localhost:3000/houses`.

### Running the Expo App

1. **Start the app** using Expo CLI:

   ```bash
   expo start
   ```

   This will open the Expo developer tools in your browser. You can then open the app on a physical device using the Expo Go app (available on iOS and Android) or run the app in an emulator.

### Testing the Location Features

- The app will request permission to access your location. Make sure you have location services enabled on your device.
- When you're close enough to a house (within a 30-meter radius), you will be able to interact with location-based features like unlocking the home.

---

## App Structure

### HomeScreen.js
Displays a list of homes fetched from the mock API. Each home includes an image, description, and location. The user can click on any home to navigate to the `DetailScreen`.

### DetailScreen.js
Shows detailed information about a specific home, including an image and description. It also checks if the user is nearby the home and allows the user to interact with location-based features (like unlocking the home).

### API: `http://localhost:3000/houses`

- GET: Fetch all houses.
- POST: Unlock a house (mock functionality).

---

## Troubleshooting

- **Location Permission Issues**: If the location permission is denied or not working, ensure that you have granted location permissions on your device.
- **API Issues**: If you are getting API errors, ensure that the json-server is running on `http://localhost:3000` and that the mock data is correctly populated in `db.json`.

---

## Notes

- You can modify the mock data in `db.json` to add more homes or change the current ones.
- The app uses `expo-location` to get the current location and checks if the user is within a 30-meter radius of the house.
