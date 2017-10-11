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
import CreateDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import ListDecks from './components/ListDecks'
import AddQuizItem from "./components/AddQuizItem";
import Exam from './components/Exam'
import { purple, blue} from "./utils/colors"


// custom status bar
function FlashCardStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

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
              screen: CreateDeck,
              navigationOptions: {
                  tabBarLabel: 'New Deck'
                  //TODO:  tabBarIcon
              }
          }
      //TODO:   tabBarOptions tint color etc....
      });

      const navOptions = {
          headerTintColor: '#FFF',
          headerStyle: {
              backgroundColor: '#1485ff'
          }
      }

      const App = StackNavigator({
          Home: {
              screen: Tabs,
              navigationOptions: { ...navOptions, title: 'FlashCards' }
          },
          DeckView: {
              screen: DeckView,
              navigationOptions: navOptions
          },
          AddQuizItem: {
              screen: AddQuizItem,
              navigationOptions: { ...navOptions, title: 'Add Quiz Item' }
          },
          Exam: {
              screen: Exam,
              navigationOptions: { ...navOptions, title: 'Exam' }
          }
      })

    return (
        <Provider store={createStore(reducer, applyMiddleware(ReduxThunk))}>
            <View style={{flex: 1}}>
                <FlashCardStatusBar backgroundColor={purple} barStyle='light-content'/>
                <App/>
            </View>
        </Provider>
    );
  }
}
