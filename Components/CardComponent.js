import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CardComponent extends Component<{}> {
  render() {
    return (
      <View style={styles.card}>
        <Text>asb</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    width: '100%',
  },
});