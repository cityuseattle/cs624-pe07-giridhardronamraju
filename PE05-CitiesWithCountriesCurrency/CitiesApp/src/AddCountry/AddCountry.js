
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

export default class AddCountry extends Component {

  state = {
    country: '',
    currency: ''
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  submit = () => {
    const { country, currency } = this.state;

    if (!country.trim() || !currency.trim()) {
      return;
    }

    const newCountry = {
      id: uuid.v4(),
      country: country.trim(),
      currency: currency.trim()
    };

    this.props.addCountry(newCountry);

    this.setState({
      country: '',
      currency: ''
    });

    Keyboard.dismiss();
  };

  render() {
    const { country, currency } = this.state;

    return (
      <View style={styles.container}>

        <Text style={styles.heading}>
          Countries
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Country name"
          placeholderTextColor="#555"
          value={country}
          onChangeText={(value) =>
            this.handleChange('country', value)
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Currency"
          placeholderTextColor="#555"
          value={currency}
          onChangeText={(value) =>
            this.handleChange('currency', value)
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}
        >
          <Text style={styles.buttonText}>
            Add Country
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
