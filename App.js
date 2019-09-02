import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import AddScreen from './screens/AddScreen'
import ProfileScreen from './screens/ProfileScreen'

export default class App extends React.Component {
  render() {
    const NavigatorTab = createAppContainer(
      createBottomTabNavigator({
        welcome: { screen: WelcomeScreen },
        main: createBottomTabNavigator({
          homeStack: { screen: HomeScreen },
          addStack: { screen: AddScreen },
          profileStack: { screen: ProfileScreen }
        })
      })
    );
    return (
      <View style={styles.container}>
        <NavigatorTab />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
