import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CardComponent from './CardComponent';

export default class BodyComponent extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <CardComponent/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BADA55',
    width: '100%',
  },
});