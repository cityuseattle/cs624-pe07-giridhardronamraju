
import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard
} from 'react-native';

import uuid from 'react-native-uuid';
import { colors } from '../theme';

export default class AddCity extends Component {

  state = {
    city: '',
    country: ''
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    const { city, country } = this.state;

    if (!city.trim() || !country.trim()) {
      return;
    }

    const newCity = {
      id: uuid.v4(),
      city: city.trim(),
      country: country.trim()
    };

    this.props.addCity(newCity);

    this.setState({
      city: '',
      country: ''
    });

    Keyboard.dismiss();
  };

  render() {
    const { city, country } = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.heading}>
          Cities
        </Text>

        <TextInput
          style={styles.input}
          placeholder="City name"
          placeholderTextColor="#555"
          value={city}
          onChangeText={(value) =>
            this.handleChange('city', value)
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Country name"
          placeholderTextColor="#555"
          value={country}
          onChangeText={(value) =>
            this.handleChange('country', value)
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}
        >
          <Text style={styles.buttonText}>
            Add City
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 20
  },

  heading: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#FFFFFF',
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 3
  },

  button: {
    backgroundColor: '#555555',
    padding: 12,
    alignItems: 'center',
    borderRadius: 3
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  }

});
