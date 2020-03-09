import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from '../Widgets/SearchBar';
import Carousel from '../Widgets/Carousel';
import {filmTop} from '../Data/static';

function FilmsPopulaires() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>Films populaires ce mois-ci</Text>
      <Carousel data={filmTop}></Carousel>
    </View>
  );
}

function RechercheFilm() {
  return (
      <SearchBar></SearchBar>
  );
}

const Tab = createBottomTabNavigator();

export default function FilmScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Films populaires" component={FilmsPopulaires} />
        <Tab.Screen name="Recherche" component={RechercheFilm} />
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
  title: {
    fontSize: 20,
    marginTop: "10%",
    marginBottom: "10%",
  }
});