import React from "react";
import { StyleSheet,View } from 'react-native';
import WebView from "react-native-webview";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function GE({ navigation }) {
  return (
    <View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <WebView
    source={{uri:'https://ge.globo.com/'}}
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
    estiloImg:{
        width:300,
        height:200,
        resizeMode:"contain",

    },
    estiloLetras:{
        fontSize:18,
        fontWeight:'bold',
        alignItems:'center'
    },
    espacamentoImg:{
        marginTop:20,
    },
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center"
    }
})