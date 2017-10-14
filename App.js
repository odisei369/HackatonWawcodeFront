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
import { Icon } from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor="black"
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <View style={styles.container_row}>
          <View style={styles.container_arrow}><Icon
            name='navigate-before'
            color='#00aced' />
          </View>
          <View style={styles.container}>
            <Card>
              <Text >
                The idea with React Native Elements is more about component structure than actual design.
                Loremdfgdfg;jkdfgkljn dfgjkldfgklj dfgjdfklgj
              </Text>
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
          <View style={styles.container_arrow}><Icon
            name='navigate-next'
            color='#00aced' /></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
