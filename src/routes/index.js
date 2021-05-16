import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  Home,
  Cashier,
  Profile,
  AddProduct,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Licence,
  Report,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Kasir" component={Cashier} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function route() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Licence" component={Licence} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
}
