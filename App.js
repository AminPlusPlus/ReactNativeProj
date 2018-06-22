import React from 'react';
import User from './model/User.js';

import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default class App extends React.Component {

  render() {

    let sas =  new User("Amin")


    return (
      <View style={styles.container}>
      <View style = {styles.topView}>
       <Image style = {styles.logo} source = {require('./img/shield.png')}/>
       <Text style = {styles.mainText}> {sas.name} </Text>
       </View>

        <Button style = {styles.btn} onPress = {onPress} title = "HI" />
      </View>
    );
  }
}

function onPress()
{
  alert("hi");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView : {
    backgroundColor : '#1a5089',
    alignItems : 'center',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  logo : {
     opacity : 1,


  },
  mainText : {
    color : "#fff",
    fontSize: 20,
    marginTop: 10,
  },
  btn : {
    color : '#841584',
    marginTop : 20
  }

});
