import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../Style/MainStyle';
import 'react-native-gesture-handler';





export default function Login({Navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const Entrar = () =>{
  Navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
  })

  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h2></Text>
      <StatusBar style="auto" />
      <Input
      placeholder="E-MAIL"
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText = {value => setEmail(value)}
      keyboardType ="email andress"
      />
          <Input
      placeholder="DIGITE SUA SENHA"
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText = {value => setPassword(value)}
      keyboardType ="Insira sua senha"
      secureTextEntry = {true}
      />

<Button
    icon={
      <Icon
      name = "check"
      size={19}
      color = "black"
    />
    }
    title = "ENTRAR"
    onPress={() => Entrar()}
    />
    </View>
  );
}
const specificStyle = StyleSheet.create({
  specificContainer:{
    backgroundColor: 'black'
  }
})

