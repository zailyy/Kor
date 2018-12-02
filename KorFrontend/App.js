import React from 'react';

import { StyleSheet, Text, View, StatusBar, Button} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'

import {createStackNavigator} from 'react-navigation';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';

import Camera from './components/Camera';
import Chat from './components/Chat';
import News from './components/News';
import Memories from './components/Memories';
import LoginScreen from './login/LoginScreen';
import LoginScreen2 from './login/LoginScreen2';
import LoginScreen3 from './login/LoginScreen3';
import LoginScreen4 from './login/LoginScreen4';
import LoginScreen5 from './login/LoginScreen5';
import LoginScreen6 from './login/LoginScreen6';
import LoginScreen7 from './login/LoginScreen7';
import LoginScreen8 from './login/LoginScreen8';

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default class App extends React.Component {
  
  


  
  

  render() {
    return (

      <Navigator initialRoute = {{id: 'Login'}}
        renderScene = {this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator){
    switch(route.id){
      case 'Login':
        return(<Login navigator = {navigator}/>);
      case 'Login2':
        return(<Login2 navigator = {navigator}/>);
      case 'MainScreen':
        return(<MainScreen navigator = {navigator}/>);
      case 'Login4':
        return(<Login4 navigator = {navigator}/>);
      case 'Login5':
        return(<Login5 navigator = {navigator}/>);
      case 'Login6':
        return(<Login6 navigator = {navigator}/>);
      case 'Login7':
        return(<Login7 navigator = {navigator}/>);
      case 'Login8':
        return(<Login8 navigator = {navigator}/>);
    }
  }
}

class Login extends React.Component{
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen></LoginScreen>
     <Text style={{fontSize: 20, marginTop:30}} onPress={ () => this.props.navigator.push({ id: 'MainScreen'}) }> Sign In </Text>
     
     <Text style={{fontSize: 20, marginTop: 30}} onPress={ () => this.props.navigator.push({ id: 'Login2'}) }> Create Account </Text>
    </View>
    )
  }
}
class Login2 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen2></LoginScreen2>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'MainScreen'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login3 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen3></LoginScreen3>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'Login4'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login4 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen4></LoginScreen4>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'Login5'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login5 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen5></LoginScreen5>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'Login6'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login6 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen6></LoginScreen6>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'Login7'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login7 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen7></LoginScreen7>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'Login8'}) }> Continue </Text>
    </View>
      
  
    )
  }
}
class Login8 extends React.Component{
  
  render(){
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
     <LoginScreen8></LoginScreen8>
     <Text style={{fontSize: 20}} onPress={ () => this.props.navigator.push({ id: 'MainScreen'}) }> Let's Connect! </Text>
    </View>
      
  
    )
  }
}
class MainScreen extends React.Component{
  constructor() {
    super()
    this.state = {
      outerScrollEnabled: true
    }
  }

  verticalScroll = (index) => {
    if (index !== 0) {
      this.setState({
        outerScrollEnabled: false
      })
    }
    else {
      this.setState({
        outerScrollEnabled: true
      })
    }
  }
  render(){
    return(
       <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            scrollEnabled={this.state.outerScrollEnabled}
            
            
          >

            <View style={{ flex: 1 }}>
                <Chat></Chat>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={0}
              onIndexChanged={(index) => this.verticalScroll(index)}
            >
              
              <View style={{ flex: 1 }}>
                <Camera></Camera>
              </View>
              <View style={{ flex: 1 }}>
                <Memories/>
              </View>
                
              
            </Swiper>
            <View style={styles.slideDefault}>
              <News/>
            </View>
          </Swiper>
        </Content>
        <StatusBar hidden/>
      </Container>

    )
  }
}

