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
export default class Calculator extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            calcDisplay: "0",
        }
    }

    handlePressOne = () => {
        console.error("blablabla");
  /*      const cine = e.value;*/
     /*   this.setState({
            calcDisplay: cine,
        })*/
    };

    render() {
        let displayCalc = this.state.calcDisplay;
    return (
      <View>
          <View>
              <Text style={styles.calculatorDisplay}>{displayCalc}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne} title="1" /></View>
            <View style={styles.buttonStyle}><Button title="2" /></View>
            <View style={styles.buttonStyle}><Button title="3" /></View>
            <View style={styles.buttonStyle}><Button title="-" /></View>
            <View style={styles.buttonStyle}><Button title="5" /></View>
            <View style={styles.buttonStyle}><Button title="6" /></View>
            <View style={styles.buttonStyle}><Button title="7" /></View>
            <View style={styles.buttonStyle}><Button title="+" /></View>
            <View style={styles.buttonStyle}><Button title="8" /></View>
            <View style={styles.buttonStyle}><Button title="9" /></View>
            <View style={styles.buttonStyle}><Button title="0" /></View>
            <View style={styles.buttonStyle}><Button title="*" /></View>
            <View style={styles.buttonStyle}><Button title="/" /></View>
            <View style={styles.buttonStyle}><Button title="CE" /></View>
            <View style={styles.buttonStyle}><Button title="C" /></View>
            <View style={styles.buttonStyle}><Button title="=" /></View>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
     },
  calculatorDisplay: {
      fontSize: 30,
      padding: 10,
      textAlign: 'right',
      backgroundColor: 'grey',
      color: 'black',
  },
  buttonStyle: {
    width: 90,
    height: 60,
      margin: 5,
      paddingTop: 30,
  }
});