import React, {Component} from 'React'
import 
{
    StyleSheet, Text, View, Image,TouchableWithoutFeedback,StatusBar
    ,TextInput,SafeAreaView,Keyboard, TouchableOpacity, KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component
{
    render()
    {
        return (
    <SafeAreaView style = {styles.container}>
        <StatusBar barStyle = {'light-content'}/>
        <KeyboardAvoidingView behavior = 'padding' style = {styles.container}>
        <TouchableWithoutFeedback style = {styles.container} onPress = {Keyboard.dismiss}>
        <View style = {styles.container}>
            <View style = {styles.logoContainer}>
            
            <Image style = {styles.logo} 
            source = {require('../img/shield.png')}> 
            </Image>
            <Text style = {styles.title}> Welcome to App </Text>
            </View>
            <View style = {styles.info}>
              <TextInput style = {styles.input} 
              placeholder = " Enter Username" 
              placeholderTextColor = '#bababa'
              keyboardType = "email-address"
              returnKeyType = "next"
              onSubmitEditing = {()=> this.refs.textPassword.focus()}
              autoCorrect = {false}>
        
              
              </TextInput>
              <TextInput style = {styles.input} 
              placeholder = " Enter Password" 
              placeholderTextColor = '#bababa'
              secureTextEntry = {true}
              returnKeyType = 'done'
              autoCorrect = {false}
              ref = {'textPassword'}>
              </TextInput>
              <TouchableOpacity style = {styles.btn}>
              <Text style = {styles.btnTitle}> Hello </Text>
              </TouchableOpacity>
            </View>

        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create (
    {
        container : {
            flex: 1,
            backgroundColor :'#273660',
            flexDirection: 'column',
        },
        logoContainer : {
            alignItems: 'center',
            justifyContent: 'center',
            flex : 1
        },
        logo : {
            width : 64,
            height : 64,
        },
        title : {
        marginTop: 10,
        opacity : 0.9,
        fontSize: 20,
        color : 'white',
        textAlign :  'center'
        },
        info : {
         position : 'absolute',
         left : 0,
         right : 0,
         bottom : 0,
         height : 200,
         padding: 20,
        // backgroundColor : 'red'
        },
        input :  {
            height : 40,
            backgroundColor : 'white',
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius : 5
        },
        btn : {
            backgroundColor : '#2fa2ef',
            paddingVertical: 15,
            borderRadius : 5
            
        },
        btnTitle : {
            color : 'white',
            fontSize : 18,
            fontWeight : 'bold',
            textAlign : 'center'
        }
    }
)