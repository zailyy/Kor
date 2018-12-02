import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import App from '../App';
import {Navigator} from 'react-native-deprecated-custom-components';
import {createStackNavigator} from 'react-navigation';
import MainScreen from '../App';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    fetch('https://kor-demo.herokuapp.com/users/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                first_name: "Adithya",last_name: "Sairamachandran",username: "asairamchan",email: "adithya.sairam1@gmail.com",snapchatProfileURL: "snapchat.com/add/adisai11",instagramProfileURL: "instagram.com/adisai1",facebookProfileURL: "facebook.com/adisai11",linkedinProfileURL: "linkedin.com/in/adithya-sairam",korProfilePictureURL: "empty",qrCodeURL: "empty",location: "YaleHacks",notes: "NULL",})});
  }
  
  render() {
    return (
      <View style={{flex:1, flexDirection:'column', marginTop:60}}>
          <View>
          <Text> Please type your name</Text>
            <TextInput
            style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
            placeholder="First Name"
            onChangeText={(first_name) => this.setState({first_name})}
            //this.state.first_name is the4 variable name
          />
          <TextInput
            style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
            placeholder="Last Name"
            onChangeText={(last_name) => this.setState({last_name})}
          />
          <Text>{this.state.first_name}</Text>
          </View>
           <View>
       <Text> Please type a username for KOR</Text>
        <TextInput
        style={{heigaht: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Username"
        onChangeText={(username) => this.setState({username})}
      />
     
      </View>

      <View>
       <Text> What is your email?</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Email"
        onChangeText={(email) => this.setState({email})}
      />
      
      </View>
      <View>
       
       <Text> What is your Snapchat?</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Snapchat"
        onChangeText={(snapchatURL) => this.setState({snapchatURL})}
      />
      
      </View>
      <View>
       
        <Text> What is your insta?</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Instagram"
        onChangeText={(instagramProfileURL) => this.setState({instagramProfileURL})}
      />
      
      </View>

      <View>
       
        <Text> What is your facebook?</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Facebook Username"
        onChangeText={(facebookProfileURL) => this.setState({facebookProfileURL})}
      />
      
      </View>
      <View>
       
        <Text> What was your Linkedin?</Text>
        <TextInput
        style={{height: 40, width: Dimensions.get('window').width*.8, borderColor: 'gray', borderWidth: 1}}
        placeholder="Linkedin Username"
        onChangeText={(linkedinProfileURL) => this.setState({linkedinProfileURL})
        }
      />
      
      </View>



      </View>
    );
  }

}
