import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import addScreen from './src/addScreen';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducers from './store/reducers/index';
import {addAd} from './store/actions/actions';
import showScreen from './src/helpers/showScreen'
import deleteScreen from './src/helpers/deleteScreen'
import RenewAdScreen from './src/helpers/RenewAdScreen'

const store = createStore(combineReducers);
const Tab = createBottomTabNavigator();
store.dispatch(addAd('Skelbimas','Parduodamas skelbimas',1))
console.log(store.getState());
class App extends Component {
render() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
      initialRoute="ShowMainInformation"
      tabBarOptions={{activeTintColor: '#deaf04'}}
      >
      <Tab.Screen name="Add" component={addScreen}/>
      <Tab.Screen name="Show" component={showScreen}/>
      <Tab.Screen name="Delete" component={deleteScreen}/>
      <Tab.Screen name="Renew" component={RenewAdScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  )
  }
}

export default App;