import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchByNameScreen from './screens/SearchByNameScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SearchByNameScreen" component={SearchByNameScreen} />
        {/* Add other screens to the navigator if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
