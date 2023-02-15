/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'User Screen',
          headerStyle: {
              backgroundColor: '#a4511e',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#0096FF'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            userIdx: 50,
            userName: 'Gildong',
            userLastname: 'Go'
          }}
          options={{
            title: 'User Screen',
            headerStyle: {
                backgroundColor: 'pink',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'purple'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
