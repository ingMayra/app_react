import React from "react";
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Loggin = () => {
    return (
  
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.bigblue}>BIENVENIDO</Text>
          <Text style={styles.bigblue}>HOLI</Text>
          <Image
            source={{
              uri: 'https://sipol.kpu.go.id/img/user.png',
            }}
            style={{width: 200, height: 200}}
          />

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10
          }}
          placeholder="Usuario"
          />
         <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10
          }}
          placeholder="Contraseña"
          />
          </View>
      </ScrollView>
      
    );
  };
  const styles = StyleSheet.create({
    container :{
      marginTop: 50,
      alignItems: "center",
      backgroundColor: '#FF5733',
      height:'auto'
    },
    bigblue:{
      color: 'black',
      fontWeight:'bold',
      fontSize: 30
    },
    body:{
      alignItems:"center"
    }
  }
  );
  export default Loggin;