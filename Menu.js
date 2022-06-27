import React, {useState} from "react";

import {StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import WebView from "react-native-webview";


const Stack = createStackNavigator();



function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ceará" component={Ceará} 
      options={{
        headerShown: false
    }}/>
      <Stack.Screen name="História" component={História} />
      <Stack.Screen name="Dicas" component={Dicas} />
    </Stack.Navigator>
  );
}





function Ceará({ navigation }) {
    return (
        <View style={styles.container}>
    
        <Animatable.View style={styles.logo}
        animation='bounceInDown'
        duration={1600}>
            <Text style={styles.estiloLetras}>SócioVozão
            <Image
            source={require('../../assets/img/icon-csc.png')}
            />
            </Text>

        </Animatable.View>

        <Animatable.View style={{marginTop:30}}
        animation='bounceInLeft'
        duration={2000}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dicas')}>
                <Text style={styles.letrasBotoes}>Loja Virtual Cearamor</Text>
            </TouchableOpacity>
        </Animatable.View>
        
        <Animatable.View style={{marginTop:20}}
        animation='bounceInLeft'
        duration={2100}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('História')}>
                <Text style={styles.letrasBotoes}>História Ceará</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>
    );
  }


  function História({ navigation }) {
    return (
      <WebView
      source={{uri:'https://pt.wikipedia.org/wiki/Cear%C3%A1_Sporting_Club'}}
      />
    );
  }


  function Dicas({ navigation }) {
    return (
      <WebView
      source={{uri:'https://www.lojatoc.com.br/bones/bone-brasao'}}
      />
      
    );
  }


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyStack/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imagemLogo:{
        width:'100%',
        height:'25%',
        

    },
    estiloLetras:{
        fontSize:50,
        fontWeight:'bold',
        flexDirection:"row",
        
        
    },
    logo:{
        justifyContent:'center'      
    },
    botao:{
        width:'100%',
        height:40,
        backgroundColor:'#222',
        alignItems:"center",
        borderColor:'#696969',
        borderRadius:20,

    },
    letrasBotoes:{
        fontSize:25,
        color:'#fff'
    },
    letras:{
        fontSize:16,
        marginLeft:5
    },
    icones:{
      width:70,
      height:50,
      resizeMode:"contain"
    }
    
});