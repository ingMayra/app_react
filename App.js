import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loggin from './screens/logginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App =() =>{
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
        name= "Loggin"
        component= {Loggin}
        options={{title: 'Iniciar sesion'}}
        />
      </Stack.Navigator> */}

      <Tab.Navigator>
        <Tab.Screen name="Loggin" component={Loggin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
