import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, Button } from 'react-native';
import App from '../App';
import {Navigator} from 'react-native-deprecated-custom-components';
import {createStackNavigator} from 'react-navigation';
import MainScreen from '../App';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{}}>
        <Text>Welcome to KOR</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Username"
        onChangeText={(text) => this.setState({text})}
      />
      <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Password"
        onChangeText={(text) => this.setState({text})}
      />
 
        
      </View>
    );
  }
}
