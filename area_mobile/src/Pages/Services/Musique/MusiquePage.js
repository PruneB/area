import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carousel from '../Widgets/Carousel';
import {entries, yourEntries} from '../Data/static';
import SearchBar from '../Widgets/SearchComponent';

function TopFrance() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Top des musiques en France</Text>
      <Carousel data={entries}/>
    </View>
  );
}

function VosTops() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Les musiques que vous écoutez le plus</Text>
      <Carousel data={yourEntries}/>
    </View>
  );
}

function RechercheParoles(text) {
  return (
    <SearchBar/>
  );
}

const Tab = createBottomTabNavigator();
export default function MusiqueScreen() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Top France" component={TopFrance} />
          <Tab.Screen name="Vos Tops" component={VosTops} />
          <Tab.Screen name="Recherche paroles" component={RechercheParoles} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: "10%",
    marginBottom: "10%",
  }
});