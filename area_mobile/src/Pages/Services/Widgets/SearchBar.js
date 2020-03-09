import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class SearchFilm extends React.Component {
  state = {
    search: undefined,
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <View>
            <SearchBar
            placeholder="Recherchez un film..."
            onChangeText={this.updateSearch}
            value={search}
            />
            {
                ( !this.state.search ? <Text/> :
                <Card title={this.state.search}>
                    <Text>Date de sortie: </Text>
                    <Text>Réalisateur: </Text>
                    <Text>Producteur: {"\n"}</Text>
                    <Text>Acteurs principaux: </Text>
                    <Text>Synopsis: </Text>
                </Card>)
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  });