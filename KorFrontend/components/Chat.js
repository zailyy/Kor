import React, { Component,TouchableOpacity, PureComponent  } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Image, Dimensions, Linking } from 'react-native';
import KORDataList from "../components/KORDataList";
import CardFlip from 'react-native-card-flip';
import Carousel from "react-native-snap-carousel";
const itemWidth = Dimensions.get("window").width-100;

class FlatListItem extends Component{
  render(){
    return(
      <View style={{
        flex:1, 
        justifyContent: 'center',
        backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen':'green',
        flexDirection:'column',
        borderRadius: 22,
        marginTop: 30,
        marginBottom: 40,

        }}
      >
        <Image
          source={{uri: this.props.item.imageURL}}
          style={styles.image}
        >
        </Image>
        <View 
          style={{flex:1, flexDirection: 'column'}}
        >
          <Text style={styles.text}>Name: {this.props.item.first_name} {this.props.item.last_name}</Text>
          <Text style={styles.text}>Username: {this.props.item.username}</Text>
          <Text style={styles.text}>Email: {this.props.item.email}</Text>
          <Text style={styles.text} onPress={() => Linking.openURL(this.props.item.snapchatURL)}>Snapchat: {this.props.item.snapchatURL}</Text>
          <Text style={styles.text}>Instagram: {this.props.item.instagramURL}</Text>
          <Text style={styles.text}>Facebook: {this.props.item.facebookURL}</Text>
          <Text style={styles.text}>Linkedin: {this.props.item.linkedinURL}</Text>

        </View>
      </View>
    );
  }
}

// export default class Chat extends Component{
//   render(){
//     return(
//       <View style={{flex:1, marginTop:80}}>
//         <FlatList 
//           data={KORDataList}
//           renderItem={({item, index})=>{
//             return ( <FlatListItem item = {item} index={index}/> );
//           }}
//         >
//         </FlatList>

        
//       </View>
        
//     )
//   }
// }

export default class App extends PureComponent {
    state = {
        index: 0,
    };

    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    width: itemWidth,
                    height: 50,
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
           
                    
                }}
            >
                
            </View>
        );
    };

    _onSnapToItem = index => {
        this.setState({ index });
    };

    render() {
        const data = [0, 1, 2, 3, 4];
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Carousel
                    activeSlideAlignment={"start"}
                    containerCustomStyle={{ paddingLeft: 36 }}

                    itemWidth={itemWidth}
                    onSnapToItem={this._onSnapToItem}
           
                    sliderWidth={Dimensions.get("window").width}
                    data={KORDataList}
                    renderItem={({item, index})=>{
                      return ( <FlatListItem item = {item} index={index}/> );
                    }}
                />
               
            </View>
        );
    }
}


const styles = StyleSheet.create({
  text:{
    fontSize: 13,
    flex:1,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10

  },
  image:{
    width: itemWidth,
    height: itemWidth,
    borderRadius: 22,
  }
})

