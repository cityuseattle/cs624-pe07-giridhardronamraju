
import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function City({ route }) {

  const { city } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.cityName}>
        {city.city}
      </Text>

      <Text style={styles.countryName}>
        {city.country}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  cityName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1976D2'
  },

  countryName: {
    fontSize: 20,
    color: '#666666',
    marginTop: 10
  }

});
