import React from "react";
import {StyleSheet} from 'react-native';
import WebView from "react-native-webview";



export default function App() {
  return (

    <WebView
      source={{uri:'https://www.cearasc.com/'}}
      />


  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    barraPesquisa:{
      flex:1
    },
  
    conteudo:{
      flex:8
    },
    rodape:{
      flex:1,
      backgroundColor:'grey',
      width:'100%'
    }
  
  });