import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Jeux() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Jeux!</Text>
    </View>
  );
}

function RechercheJeux() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recherche !</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function JeuxScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Jeux" component={Jeux} />
          <Tab.Screen name="Recherche" component={RechercheJeux} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});