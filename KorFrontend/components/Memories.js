import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import CardFlip from 'react-native-card-flip';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
                                      <Text style={{fontSize:100, flex: 1, }}>Business Card, tap me</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
                                      <Image source={{uri:'https://cdn-images-1.medium.com/max/1600/1*FDqK2wD1euDeauwBXIPWWQ.png'}}style={{width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').width*0.9,}}/>
                                    </TouchableOpacity>
                                  </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  card:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});