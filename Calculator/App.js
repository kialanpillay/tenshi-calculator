import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Calculator from './pages/Calculator.js';
import Home from './pages/Home.js';

Stack = createStackNavigator();

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    //SplashScreen.hide();
  }
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Calculator" options={{headerShown: false}}>
              {props => <Calculator {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Home" options={{headerShown: false}}>
              {props => <Home {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
