import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from './components/Auth/AuthForm';
import AuthContent from './components/Auth/AuthContent';
import { createNativeStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Colors } from '../../constants/styles';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import { useContext } from 'react';
import AuthContextProvider, { AuthContext } from './store/auth-context';

const Stack = createNativeStackNavigator();

//아직 인증이 되지 않은 사용자가 보게 될 하면 stack
const AuthStack = () => {
  return (
    <Stack.Navigator
      // Header 블록에 대한 스타일
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        //Header의 텍스트, 버튼 색상
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
};

//인증이 완료된 사용자가 보게 될 stack
const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        //Header의 텍스트, 버튼 색상
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isLoggedIn && <AuthStack />}
      {authCtx.isLoggedIn && <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default function App() {
  const authCtx = useContext(AuthContext); //@@@
  console.log('isLoggedIn: ', authCtx.isLoggedIn);

  return (
    <StatusBar style='light'>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </StatusBar>
  );
}
