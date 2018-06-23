import React, {Component} from 'react'
import 
{
    StyleSheet, Text, View, Image,TouchableWithoutFeedback,StatusBar
    ,TextInput,SafeAreaView,Keyboard, TouchableOpacity, KeyboardAvoidingView
} from 'react-native'

export default class MainView extends Component{
    render (){
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {styles.topView}>
                <TouchableOpacity style = {styles.btnleft}>
                <Text style = {styles.btnText}>Ti</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>Tidi Hi 😃</Text>
                <TouchableOpacity style = {styles.btnRight}>
                <Text style = {styles.btnText} >Tidi Hi</Text>
                </TouchableOpacity>
            </View>
           </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#6CB2EB',
        flex: 1,
    },
    topView : {
        backgroundColor : '#2779BD',
        top: 10,
        height : 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title :{
        color : 'white',
        fontWeight: 'bold',
        textAlign : 'center',
        fontSize: 20,
    },
    btnleft : {
        backgroundColor : '#fff',
        width : 60,
        height : 40,
        left : 10,
        borderRadius : 5,
       // alignItems: 'center',
    },
    btnRight : {
        backgroundColor : '#fff',
        width : 60,
        height : 40,
        right : 10,
        borderRadius : 5,
       // alignItems: 'center',
    },
    btnText :{
        color : 'white',
        fontSize : 1,
        fontWeight : 'bold',
        textAlign : 'center'
    },
})
