/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
              <Text style={styles.welcome}>CALCULATOR</Text>
          </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  welcome: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
    box: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'grey',
    },
});