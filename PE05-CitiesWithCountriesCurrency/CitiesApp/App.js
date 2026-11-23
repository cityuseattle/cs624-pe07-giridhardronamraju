
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStack({ cities }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" options={{ title: 'Cities' }}>
        {(props) => (
          <Cities {...props} cities={cities} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="City"
        component={City}
        options={({ route }) => ({
          title: route.params?.city?.city || 'City Details'
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => {
    setCities(previous => [...previous, city]);
  };

  const addCountry = (country) => {
    setCountries(previous => [...previous, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1976D2',
          tabBarInactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen
          name="CitiesTab"
          options={{ title: 'Cities' }}
        >
          {() => <CitiesStack cities={cities} />}
        </Tab.Screen>

        <Tab.Screen
          name="AddCity"
          options={{ title: 'AddCity' }}
        >
          {(props) => (
            <AddCity {...props} addCity={addCity} />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="AddCountry"
          options={{ title: 'AddCountry' }}
        >
          {(props) => (
            <AddCountry {...props} addCountry={addCountry} />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Countries"
          options={{ title: 'Countries' }}
        >
          {(props) => (
            <Countries {...props} countries={countries} />
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
