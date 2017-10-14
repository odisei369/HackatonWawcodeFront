/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BodyComponent from "./Components/BodyComponent";
import { Header } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import { Image } from 'react-native'
import { Card, ListItem} from 'react-native-elements'
import {Grid, Col, Row} from 'react-native-elements';
import { Icon } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    return fetch('http://192.168.56.1:8000/month-day/1/1')
      // .then((response) => response.json())
      // .then((responseJson) => {
      //   this.setState({
      //     isLoading: false,
      //     eventsFromServer: responseJson,
      //   }, function() {
      //     //document.querySelector('#mytext').innerHTML = state.eventsFromServer;
      //   });
      //   console.log('oooooooook!!!!!');
       //})
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Header backgroundColor="#FFD600"
                  centerComponent={{ text: 'Loading data...', style: { color: '#fff' } }}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header backgroundColor="#FFD600"
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
          <Card>
              <Text id="mytext" style={{ marginBottom:40}}>
                Pobrane
              </Text>
            <Button
              raised
              icon={{name: 'cached'}}
              title='Inne wydarżenie' />
            </Card>
            <Card title='Share with friends'>
              <View style={styles.container_row}>
                <SocialIcon
                  type='twitter'
                />
                <SocialIcon
                  raised={false}
                  type='facebook'
                />

                <SocialIcon
                  light
                  type='google'
                />
              </View>
            </Card>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1100',
  },
  container_arrow: {
    flexShrink: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  container_row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
