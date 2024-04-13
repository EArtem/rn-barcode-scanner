import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleCheckByNamePress = () => {
    // Navigate to the screen for searching by company name
    navigation.navigate('SearchByNameScreen');
    console.log(navigation)
  };

  const handleScanCodePress = () => {
    // Navigate to the screen for scanning the code
    navigation.navigate('ScanCodeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Check by Company Name"
          onPress={handleCheckByNamePress}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Scan Code"
          onPress={handleScanCodePress}
        />
      </View>
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
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen;
