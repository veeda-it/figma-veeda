import React, { useEffect, useState } from 'react';
import { navigationRef } from '../Utils/rootNavigation';
//  Internal Imports
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import GetStartedScreen from '../Screens/GetStartedScreen/GetStartedScreen';

// External Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/OnboaringScreens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen/CategoriesScreen';
import DetailsScreen from '../Screens/DetailsScreen/DetailsScreen';
import UserFollowScreen from '../Screens/UserFollowScreen/UserFollowScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserFollowScreen" component={UserFollowScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
