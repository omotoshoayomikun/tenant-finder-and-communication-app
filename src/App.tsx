import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import PersonalQues from './pages/Auth/Register/PersonalQues';
import ForgetPass from './pages/Auth/ForgetPass';
import NextOfKinQues from './pages/Auth/Register/NextOfKinQues';
import PasswordSet from './pages/Auth/Register/PasswordSet';
import Dashboard from './pages/Home';
import Session from './pages/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from './utils/GlobalStyle';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home';
import Chat from './pages/Chat';
import EditProfile from './components/Profile/EditProfile';
import AddHouseToRent from './components/Profile/AddHouseToRent';
import EditHouseToRent from './components/Profile/EditHouseToRent';
import ChatMessages from './components/Chat/ChatMessages';


function App(): JSX.Element {

  const Stack = createStackNavigator();
  const { Purple } = GlobalStyle

  const LoginStackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        {/* <Stack.Screen name='Landing' component={Landing} /> */}
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />

      </Stack.Navigator>
    )
  }

  const ProfileStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Profile' options={{headerShown: false}} component={Profile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='AddHouseToRent' component={AddHouseToRent} />
        <Stack.Screen name='EditHouseToRent' component={EditHouseToRent} />
      </Stack.Navigator>
    )
  }

  const ChatStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='ChatMessages' component={ChatMessages} />
      </Stack.Navigator>
    )
  }

  const Tab = createBottomTabNavigator();

  const LayoutTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName={'Home'}
        // backBehavior='none'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
           
             if (route.name === 'Home') {
              return (

                <Ionicons size={25} name={focused ? 'home' : 'home-outline'} />
              )

            } else if (route.name === 'ProfileStackScreen') {
              return (
                <FontAwesome name={focused ? 'user' : 'user-o'} size={25} />
              )
            } 
            else if (route.name === 'ChatStackScreen') {
              return (
                <Ionicons size={25} name={focused ? 'chatbox' : 'chatbox-outline'} />
              )

            }
            // return iconName
          },
          // tabBarShowLabel: false,
          header: () => null,
          // tabBarActiveTintColor: `#ffffff`,
          // tabBarActiveBackgroundColor: `#701a75`,

          // tabBarLabelPosition: 'beside-icon'
        })}
      >
        {/* <Tab.Screen name='Session' component={Session} /> */}
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='ProfileStackScreen' options={{tabBarLabel: 'Profile'}} component={ProfileStackScreen} />
        <Tab.Screen name='ChatStackScreen' options={{tabBarLabel: 'Chats'}} component={ChatStackScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          { header: () => null }
        }
      >
        <Stack.Screen
          name='LoginStackScreen'
          component={LoginStackScreen}
        />
        <Stack.Screen
          name='LayoutTabScreen'
          component={LayoutTabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
