import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class ReportProblem extends Component{
  constructor(){
    super();
    this.state={
      issue:"",
      emailid:"",
      
    }
  }
     render(){
         return(
           <View>
             <View>
               <MyHeader title="Report Problem" navigation={this.props.navigation}/>
             </View>
             <ScrollView bounces={false}>
               <KeyboardAvoidingView behavior="padding">
            <Text>Report an issue</Text>
            <TextInput placeholder={"issue"}
            multiline={true}
            onChangeText={(text)=>{
              this.setState({
                issue:text
              })
            }}
            value={this.state.issue }/>
             <Text>E-mail Id</Text>
            <TextInput placeholder={"E-mail Id"}
            keyboardType={"email-address"}
            onChangeText={(text)=>{
              this.setState({
                emailid:text
              })
            }}
            value={this.state.issue }/>
            </KeyboardAvoidingView>
            </ScrollView>
           </View>
         )
     }
}