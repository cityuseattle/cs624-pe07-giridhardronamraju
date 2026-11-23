
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import City from './src/Cities/City';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Cities and City screens
function CitiesStack({ cities }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cities"
        options={{ title: 'Cities' }}
      >
        {(props) => (
          <Cities
            {...props}
            cities={cities}
          />
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

// Main Application
export default function App() {

  const [cities, setCities] = useState([]);

  // Add a new city to the list
  const addCity = (city) => {
    setCities((previousCities) => [
      ...previousCities,
      city
    ]);
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
            <AddCity
              {...props}
              addCity={addCity}
            />
          )}
        </Tab.Screen>

      </Tab.Navigator>

    </NavigationContainer>
  );
}
