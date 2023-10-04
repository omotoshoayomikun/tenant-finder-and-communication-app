import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet
} from 'react-native';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home';
import Chat from './pages/Chat';
import EditProfile from './components/Profile/EditProfile';
import AddHouseToRent from './components/Profile/AddHouseToRent';
import EditHouseToRent from './components/Profile/EditHouseToRent';
import ChatMessages from './components/Chat/ChatMessages';
import { UserContext } from './userContext';
import HouseDetails from './pages/HouseDetails';
// import { Camera } from 'react-native-vision-camera'


function App() {

  const Stack = createStackNavigator();

  const LoginStackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />

      </Stack.Navigator>
    )
  }

  const ProfileStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Profile' options={{ headerShown: false }} component={Profile} />
        <Stack.Screen name='EditProfile' options={{headerTitle: 'Edit Profile'}} component={EditProfile} />
        <Stack.Screen name='AddHouseToRent' options={{headerTitle: 'Add House'}} component={AddHouseToRent} />
        <Stack.Screen name='EditHouseToRent' options={{headerTitle: 'House'}} component={EditHouseToRent} />
      </Stack.Navigator>
    )
  }

  const ChatStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='ChatMessages'  options={{headerTitle: 'Messages'}}  component={ChatMessages} />
      </Stack.Navigator>
    )
  }

  const HomeStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{headerShown: false}} component={Home} />
        <Stack.Screen name='HouseDetails' options={{headerTitle: 'House Detail'}} component={HouseDetails} />
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

            if (route.name === 'HomeStackScreen') {
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
          },
          header: () => null,
        })}
      >
        {/* <Tab.Screen name='Session' component={Session} /> */}
        <Tab.Screen name='HomeStackScreen' options={{tabBarLabel: 'Home'}} component={HomeStackScreen} />
        <Tab.Screen name='ProfileStackScreen' options={{ tabBarLabel: 'Profile' }} component={ProfileStackScreen} />
        <Tab.Screen name='ChatStackScreen' options={{ tabBarLabel: 'Chats' }} component={ChatStackScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <UserContext>
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
    </UserContext>
  );
}

const styles = StyleSheet.create({

});

export default App;
