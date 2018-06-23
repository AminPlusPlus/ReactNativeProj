import React from 'react';
import User from './model/User.js';

import { StyleSheet, Text, View,Image, Button,TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  render() {

    let sas =  new User("Amin")


    return (
      <View style={styles.container}>
      <View style = {styles.topView}>
       <Image style = {styles.logo} source = {require('./img/shield.png')}/>
       <Text style = {styles.mainText}> {sas.name} </Text>
       </View>
       <TouchableOpacity
          style={styles.logButton}
          onPress={onPress}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
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
    marginTop: 20,
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

  logButton : {
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    paddingLeft : 10,
    paddingRight : 10
}

});
