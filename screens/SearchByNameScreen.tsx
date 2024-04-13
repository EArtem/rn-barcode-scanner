// SearchByNameScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const SearchByNameScreen: React.FC<Props> = ({ navigation }) => {
  // Add your search logic here

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by Company Name</Text>
      {/* Add your search input and results here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
});

export default SearchByNameScreen;
