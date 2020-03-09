import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Icon } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AuthScreen from './src/Pages/Connexion/LoginScreen';
import RegisterScreen from './src/Pages/Connexion/RegisterScreen';
import MusiqueScreen from './src/Pages/Services/Musique/MusiquePage';
import TélévisionScreen from './src/Pages/Services/Télévision/TélévisionPage';
import FilmScreen from './src/Pages/Services/Film/FilmPage';
import JeuxScreen from './src/Pages/Services/Jeux/JeuxPage';
import MenuButton from './src/Images/MenuButton.png';

class DrawerButton extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={MenuButton}
            style={{ width: 60, height: 60, marginBottom: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AuthStack = createStackNavigator({
  LoginScreen: AuthScreen,
  RegisterScreen: RegisterScreen,
},{
  headerMode:'none',
})

const MusiqueStack = createStackNavigator({
    Musique: {
      screen: MusiqueScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: 'screen',
        headerTitle: 'Musiques',
        headerLeft: () => <DrawerButton navigationProps={navigation} />,
        drawerLabel: 'Musiques',
    }),
  }
});

const TélévisionStack = createStackNavigator({
  Télévision: {
    screen: TélévisionScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Télévision',
      headerLeft: () => <DrawerButton navigationProps={navigation} />,
      drawerLabel: 'Télévision',
  }),
}
});

const FilmStack = createStackNavigator({
    Films: {
      screen: FilmScreen,
      navigationOptions: ({ navigation }) => ({
        headerMode: 'screen',
        headerTitle: 'Films & Séries',
        headerLeft: () => <DrawerButton navigationProps={navigation} />,
        drawerLabel: 'Films & Séries',
      }),
    }
  }
);

const JeuxStack = createStackNavigator({
    Jeux: {
      screen: JeuxScreen,
      navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Jeux-vidéo',
      headerLeft: () => <DrawerButton navigationProps={navigation} />,
      drawerLabel: 'Jeux-vidéo',
    }),
  }
});

const AppDrawer = createDrawerNavigator({
  Musiques: {
    name: 'MusiqueScreenStack',
    screen: MusiqueStack,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: () => (
        <Image
          source={{uri: 'https://i.dlpng.com/static/png/6711192_preview.png'}}
          style={{width: 30, height: 30, borderRadius: 15}}
      />
      )
    }),
  },
  "Films": {
    name: 'FilmScreenStack',
    screen: FilmStack,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: () => (
        <Image
          source={{uri: 'https://image.flaticon.com/icons/png/512/57/57529.png'}}
          style={{width: 30, height: 30, borderRadius: 15}}
      />
      )
    }),
  },
  "Télévision": {
    name: 'TélévisionScreenStack',
    screen: TélévisionStack,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: () => (
        <Image
          source={{uri: 'https://image.flaticon.com/icons/png/512/49/49672.png'}}
          style={{width: 30, height: 30, borderRadius: 15}}
      />
      )
    }),
  },
  "Jeux-vidéo" : {
    name: 'JeuxScreenStack',
    screen: JeuxStack,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: () => (
        <Image
          source={{uri: 'https://img2.freepng.fr/20180508/lje/kisspng-joystick-game-controllers-video-game-gamepad-5af1344e5dde22.0477965615257570063845.jpg'}}
          style={{width: 30, height: 30, borderRadius: 15}}
      />
      )
    }),
  },
});

const AppNavigator = createSwitchNavigator(
  {
    App: AppDrawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;