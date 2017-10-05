import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';

import  { FontAwesome, Ionicons } from '@expo/vector-icons'
import AddDeck from './components/AddDeck'
import ListDecks from './components/ListDecks'

export default class App extends React.Component {
  render() {
      const Tabs = TabNavigator({
          DeckList: {
              screen: ListDecks,
              navigationOptions: {
                  tabBarLabel: 'Deck List'
              }
          },
          NewDeck: {
              screen: AddDeck,
              navigationOptions: {
                  tabBarLabel: 'New Deck'
              }
          }
      });
      const navOptions = {
          headerTintColor: '#FFF',
          headerStyle: {
              backgroundColor: '#1485ff'
          }
      }
    return (
        <Provider store={createStore(reducer, applyMiddleware(ReduxThunk))}>
            <View style={{flex: 1}}>
                <Tabs/>
            </View>
        </Provider>
    );
  }
}
