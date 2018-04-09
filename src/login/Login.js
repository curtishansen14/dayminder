import React from 'react'
import * as firebase from 'firebase'
import { View, Button, Text, StyleSheet, TextInput, Image } from 'react-native'
import {TextField} from 'react-native-material-textfield'


export default class Login extends React.Component {
    state={
        email:'',
        password:''
    };

    onLoginPress(){
        const {email, password} = this.state;
        console.log('Login press function start')
        firebase.auth().signInWithEmailAndPassword(email ,password)
        .then(() => {
            console.log("Logged in");
        });
    }
    render() {
        let {email} = this.state;
        let {password} = this.state;
        return (
            <View>
                <View>
                    <Text style = {styles.titleText} >  DayMinder</Text> 
                    <Image
                    style = {{width: 200, height: 200, marginTop: 20}} 
                    source = {require('../images/sun.png')}/>
                    <TextField label ='Email' 
                    value={email} 
                    onChangeText={ (email) => this.setState({email})} />
                    <TextField label ='Password'
                    value={password}
                    onChangeText= { (password) => this.setState({password})} />
                    <Button title="Login"  onPress ={this.onLoginPress.bind(this)} />
                    <Button title="Sign Up" onPress ={() => console.log("Sign Up Pressed")}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleText:{
        fontFamily: 'Georgia',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#009a00'}
})