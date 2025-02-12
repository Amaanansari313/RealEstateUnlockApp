import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

export default function DetailScreen({ route }) {
  const { home } = route.params;
  const [isNearby, setIsNearby] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const distance = calculateDistance(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude,
        parseFloat(home.latitude),
        parseFloat(home.longitude)
      );

      setIsNearby(distance < 30);
    })();
  }, []);

  const unlockHome = async () => {
    await axios.post('https://678f678849875e5a1a91b27f.mockapi.io/houses/unlock', { homeId: home.id });
    Alert.alert('Success', 'Home unlocked!');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: home.imagerUrl }} style={styles.image} />
      <View style={styles.cardContent}>
      <Text style={styles.location}>Location: {home.latitude}, {home.longitude}</Text>
        <Text style={styles.address}>{home.description}</Text>
        {isNearby && <Button title="Unlock Home" onPress={unlockHome} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  cardContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});
