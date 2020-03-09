import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <View>
            <SearchBar
            placeholder="Recherchez une chanson..."
            onChangeText={this.updateSearch}
            value={search}
            />
            <Text style={styles.title}>Paroles de {this.state.search}</Text>
            <ScrollView style={{height: "76%"}}>
                <Text style={styles.paroles}>
                    Lorem ipsum dolor sit amet{"\n"}
                    Consectetur adipiscing elit{"\n"}
                    Donec lacinia fermentum nisl ac malesuada{"\n"}
                    Maecenas rutrum urna non libero blandit{"\n"}
                    In congue est sagittis{"\n"}
                    Donec pulvinar ligula sem{"\n"}
                    Nec viverra sem tempus a{"\n"}
                    Phasellus luctus ac massa eget volutpat{"\n"}
                    Vestibulum vulputate nisl nec molestie molestie{"\n"}
                    Interdum et malesuada fames ac ante ipsum primis in {"\n"}
                    Ut ac augue a augue ultricies malesuada{"\n"}
                    Donec aliquet  placerat{"\n"}
                    Etiam semper finibus neque{"\n"}
                    Integer vitae quam in lacus efficitur tincidunt{"\n"}
                    Aenean facilisis ipsum erat{"\n"}
                    Et iaculis justo cursus nec{"\n"}
                    Duis tristique sit amet augue a interdum{"\n"}
                    Cras ullamcorper ante nec commodo viverra{"\n"}
                    Interdum et malesuada fames ac ante ipsum primis in {"\n"}
                    Ut ac augue a augue ultricies malesuada{"\n"}
                    Donec aliquet  placerat{"\n"}
                    Etiam semper finibus neque{"\n"}
                    Praesent a nulla libero{"\n"}
                    Praesent et pretium quam.{"\n"}
                    Lorem ipsum dolor sit amet{"\n"}
                    Consectetur adipiscing elit{"\n"}
                    Donec lacinia fermentum nisl ac malesuada{"\n"}
                    Maecenas rutrum urna non libero blandit{"\n"}
                    In congue est sagittis{"\n"}
                    Donec pulvinar ligula sem{"\n"}
                    Nec viverra sem tempus a{"\n"}
                    Interdum et malesuada fames ac ante ipsum primis in {"\n"}
                </Text>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      marginTop: "5%",
      marginBottom: "5%",
      textAlign: "center"
    },
    paroles: {
        fontSize: 15,
        textAlign: "center",
    }
  });