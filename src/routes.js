import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AuthStack = createStackNavigator();

export default function Routes() {
  return (
    <AuthStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#fff',
      }}
    >
      <AuthStack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Dashboard' }}
      />
      <AuthStack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
    </AuthStack.Navigator>
  );
}
