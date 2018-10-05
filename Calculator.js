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

    handlePressNumber = param => (event) => {
       // console.error(param);
        const copy = this.state.calcDisplay;
        this.setState({
            calcDisplay: [...copy, param],
            sign: '',
            primaryNumber: 0,
            secondaryNumber: 0,
        })
    };

    handlePressSymbol = param => (event) => {
       // console.error(param);
        let firstNumber = this.state.calcDisplay;

        this.setState({
            sign: param,
            primaryNumber: firstNumber,
        });
        
    };



    render() {
        let displayCalc = this.state.calcDisplay;
    return (
      <View>
          <View>
              <Text style={styles.calculatorDisplay}>{displayCalc}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(1)} title="1" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(2)} title="2" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(3)} title="3" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressSymbol("-")} title="-" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(5)} title="5" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(6)} title="6" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(7)} title="7" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressSymbol("+")} title="+" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(8)} title="8" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(9)} title="9" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber(0)} title="0" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressSymbol("*")} title="*" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressSymbol("/")} title="/" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber("CE")} title="CE" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressNumber("C")} title="C" /></View>
            <View style={styles.buttonStyle}><Button onPress={this.handlePressSymbol('=')} title="=" /></View>
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