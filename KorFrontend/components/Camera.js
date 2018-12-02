import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Linking,
    Dimensions,
    LayoutAnimation,
    StatusBar,
    TouchableOpacity,
    Image
} from "react-native";

import { Camera, Permissions, BarCodeScanner } from 'expo'
import App from '../App';


import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import SwipeUpDown from 'react-native-swipe-up-down';

type Props = {};


class CameraComponent extends Component {


  
    
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        lastScannedUrl: null,
    }
    componentDidMount() {
    this.componentWillMount();
    }
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' })
    }
    _handleBarCodeRead = result => {
     if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
     }
   };

    render() {
        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return <View />
        }
        else if (hasCameraPermission === false) {
            return <Text> No access to camera</Text>
        }
        else {

          //Variables
          var h = 60;



            return (
              
                <View style={{ flex: 1 }} >

                  <BarCodeScanner
                    type={this.state.type}
                    onBarCodeRead={this._handleBarCodeRead}
                    
                    style={{
                      height: Dimensions.get('window').height,
                      width: Dimensions.get('window').width,

                      flex: 1, justifyContent: 'space-between'
                    }}
                  >
                  
                 
                     <View style={styles.topButtons}> 
                    <MaterialCommunityIcons name="account-card-details" style={{ color: 'white', fontSize:50, }} onPress={() => {Alert.alert('Going to fix Business Card QR Code'); }}/>
                    <Icon name="ios-flash" style={{ color:'white', fontWeight: 'bold', fontSize: 40 }} onPress={() => { Alert.alert('Going to fix the flash button')}}/>
                    <Icon onPress={() => { this.setState({ type: this.state.type === Camera.Constants.Type.back ?
                      Camera.Constants.Type.front : Camera.Constants.Type.back }) }}
                      name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold', fontSize: 60 }} />
              
                    </View>
            
      
                
                    <View style={{flex:1, 
                                  flexDirection:'row', 
                                  alignItems: 'flex-end', 
                                  justifyContent:'space-between', 
                                  margin: 10, marginBottom:h}}
                    >
                    <MaterialCommunityIcons name="account-multiple"
                        style={{ color: 'white', fontSize: 50 }}
                        onPress={() => {Alert.alert('Going to fix the chat button'); }}
                    ></MaterialCommunityIcons>
                    <MaterialCommunityIcons name="newspaper"
                        style={{ color: 'white', fontSize: 50 }}
                        onPress={() => {Alert.alert('Going to fix the news button'); }}
                    ></MaterialCommunityIcons>  

                   
                        </View> 
                            
                            <SwipeUpDown
                              hasRef={ref => (this.swipeUpDownRef = ref)}
                              itemMini={
                                <Text style={styles.welcome}>Tap on me for QR Code</Text>
                              }
                              itemFull={
                                <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
                                <Text style={styles.instructions}>
                                  Welcome to KOR!{'\n'} {'\n'} {'\n'}Below is your QR Code{'\n'}{'\n'}
                                </Text>
                                 <Image
          source={{uri: 'http://api.qrserver.com/v1/create-qr-code/?data=kor.com/users/jfangwang&size=150x150'}} style={{width:Dimensions.get('window').width-50, height:Dimensions.get('window').width-50}}
          
        >
        </Image>
                                </View>
                              }
                              onShowMini={() => console.log('mini')}
                              onShowFull={() => console.log('full')}
                              disablePressToShow={false}
                              swipeHeight={h}
                              style={styles.bcard}
                              animation="easeInEaseOut"



                              
                    />       
                            



                        



                    {this._maybeRenderUrl()}

                   
                    
                  </BarCodeScanner>
                  
                </View>
            );
        }

    }

    _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}
export default CameraComponent;

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: '30%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
    justifyContent:'center',
    
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  bcard:{
    backgroundColor: 'mediumseagreen',

  },
  topButtons:{
    flex:1, 
    flexDirection:'row', 
    alignItems: 'flex-start', 
    
    justifyContent:'space-between', 
    margin: 10,
  },
});
