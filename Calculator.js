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
            calcDisplay: "1",
        }
    }

    handlePressOne = param => (event) => {
       // console.error(param);
        const copy = this.state.calcDisplay;
        this.setState({
            calcDisplay: [...copy, param],
        })
    };

    render() {
        let displayCalc = this.state.calcDisplay;
    return (
      <View>
          <View>
              <Text style={styles.calculatorDisplay}>{displayCalc}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(1)} title="1" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(2)} title="2" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(3)} title="3" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("-")} title="-" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(5)} title="5" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(6)} title="6" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(7)} title="7" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("+")} title="+" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(8)} title="8" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(9)} title="9" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne(0)} title="0" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("*")} title="*" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("/")} title="/" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("CE")} title="CE" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne("C")} title="C" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressOne('=')} title="=" /></View>
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