/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box} />
        <Text style={styles.welcome}>Witam</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      width: 100,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    box: {
            height: 10,
    backgroundColor: 'steelblue',
    },
});