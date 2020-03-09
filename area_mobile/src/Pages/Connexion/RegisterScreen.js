import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

class RegisterScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email   : '',
        password: '',
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Register to Artium</Text>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f4ec',
    },
    title: {
      fontSize: 25,
      fontFamily: 'Courier New',
      marginBottom: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    registerButton: {
      backgroundColor: "#34495e",
    },
    registerText: {
      color: 'white',
    }
  });

  export default RegisterScreen;