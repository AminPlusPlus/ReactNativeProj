import React, {Component} from 'react'
import {StyleSheet, Text , View } from 'react-native'

export default class Splash extends Component{
   
    render(){
        return (
            <View style = {styles.container}>
             
             <Text style = {styles.title}>Tidi Hi 😃</Text>

            </View>
        )

        
    }
    
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#273660',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        color : 'white',
        fontWeight: 'bold',
        textAlign : 'center',
        fontSize: 30,
    }
})


