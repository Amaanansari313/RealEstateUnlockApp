import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchHomes = async () => {
  const response = await axios.get('https://678f678849875e5a1a91b27f.mockapi.io/houses');
  return response.data;
};

export default function HomeScreen({ navigation }) {
  const { data, error, isLoading } = useQuery('homes', fetchHomes);

  if (isLoading) return <ActivityIndicator size="large" style={styles.loader} />;
  if (error) return <Text>Error loading homes</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { home: item })}>
          <View style={styles.card}>
            <Image source={{ uri: item.imagerUrl }} style={styles.image} />
            <View style={styles.cardContent}>
            <Text style={styles.location}>Location:{item.latitude}, {item.longitude}</Text>
              <Text style={styles.address}>{item.description}</Text>
              
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
});
