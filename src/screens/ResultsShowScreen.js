import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: result.thumb }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.name}>Average Cost For Two</Text>
      <Text>{result.currency} {result.average_cost_for_two}</Text>
      <Text style={styles.name}>Cuisines</Text>
      <Text>{result.cuisines}</Text>
      <Text style={styles.name}>Timings</Text>
      <Text>{result.timings}</Text>
      <Text style={styles.name}>Highlights -</Text>
      <FlatList
        data={result.highlights}
        keyExtractor={(info) => info}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  },
  title: {
    color: '#0000aa',
    fontSize: 30,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ResultsShowScreen;
