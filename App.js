import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import * as EmailValidator from 'email-validator';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      usertype: '',
      password: '',
    }
  }

    componentDidMount=()=>
  {

  }


  UserRegistrationFunction = () =>{
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        name: this.state.name,

        email: this.state.email,

        username: this.state.username,

        user_type: this.state.usertype,

        password: this.state.password

      })

    }).then((response) => response.json())
        .then((responseJson) => {

          // Showing response message coming from server after inserting records.
          alert(JSON.stringify(responseJson));

        }).catch((error) => {
      console.error(error);
    });

  }
  // UserRegistrationFunction = () =>{
  //
  //   fetch('http://localhost:3000/user', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //
  //       name: this.state.name,
  //
  //       email: this.state.email,
  //
  //       username: this.state.username,
  //
  //       password: this.state.password
  //
  //     })
  //
  //   }).then((response) => response.json())
  //       .then((responseJson) => {
  //
  //         // Showing response message coming from server after inserting records.
  //         Alert.alert(responseJson);
  //
  //       }).catch((error) => {
  //     console.error(error);
  //   });

  // }

  render() {
    return (
        <View style={styles.MainContainer}>

          <Text style= {styles.title}>User Registration Form</Text>

          <TextInput
              placeholder="Enter User Name"
              onChangeText={name => this.setState({name : name})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
          />

          <TextInput
              placeholder="Enter User Email"
              onChangeText={email => this.setState({email : email})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Enter User UserName"
            onChangeText={username => this.setState({username : username})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

          <TextInput
              placeholder="Enter User type"
              onChangeText={usertype => this.setState({user_type : usertype})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
          />

          <TextInput
              placeholder="Enter User Password"
              onChangeText={password => this.setState({password : password})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
          />

          <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
        </View>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10
  },

  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },

  title:{
    fontSize: 22,
    color: "#009688",
    textAlign: 'center',
    marginBottom: 15
  }
});