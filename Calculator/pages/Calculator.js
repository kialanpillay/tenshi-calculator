import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import call from 'react-native-phone-call';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: [],
      input: 0,
      isOperation: false,
      operation: '',
      solve: false,
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.negate = this.negate.bind(this);
    this.digit = this.digit.bind(this);
    this.equals = this.equals.bind(this);
    this.clear = this.clear.bind(this);
    this.emergencyCall = this.emergencyCall.bind(this);
  }

  digit(value) {
    if (this.state.isOperation) {
      this.setState({isOperation: false, operation: '', input: value});
    } else if (this.state.solve) {
      this.setState({solve: false, input: value});
    } else {
      if (this.state.input.toString().length <= 6) {
        if (this.state.input == 0) {
          this.setState({input: value});
        } else {
          newValue = this.state.input + value.toString();
          this.setState({input: Number(newValue)});
        }
      }
    }
  }

  negate() {
    this.setState({input: -this.state.input});
  }

  add() {
    if (this.state.isOperation == true) {
      this.state.equation[this.state.equation.length - 1] = 'a';
      this.setState({operation: 'a'});
    } else {
      this.state.equation.push(this.state.input);
      this.state.equation.push('a');
      this.setState({isOperation: true, operation: 'a'});
    }
  }

  subtract() {
    if (this.state.isOperation == true) {
      this.state.equation[this.state.equation.length - 1] = 's';
      this.setState({operation: 's'});
    } else {
      this.state.equation.push(this.state.input);
      this.state.equation.push('s');
      this.setState({isOperation: true, operation: 's'});
    }
  }

  multiply() {
    if (this.state.isOperation == true) {
      this.state.equation[this.state.equation.length - 1] = 'm';
      this.setState({operation: 'm'});
    } else {
      this.state.equation.push(this.state.input);
      this.state.equation.push('m');
      this.setState({isOperation: true, operation: 'm'});
    }
  }

  emergencyCall(type) {
    const nationalEmergencyHotline = {
      number: '10111',
      prompt: false,
    };

    const ambulance = {
      number: '10177',
      prompt: false,
    };

    const domesticViolenceHotline = {
      number: '0800150150',
      prompt: false,
    };

    const childline = {
      number: '0800150150',
      prompt: false,
    };

    const gbvCommandCentre = {
      number: '0800150150',
      prompt: false,
    };

    if (type == 'A') {
      call(ambulance);
    } else if (type == 'N') {
      call(nationalEmergencyHotline);
    } else if (type == 'D') {
      call(domesticViolenceHotline);
    } else if (type == 'C') {
      call(childline);
    } else if (type == 'G') {
      call(gbvCommandCentre);
    }
  }

  divide() {
    if (this.state.isOperation == true) {
      this.state.equation[this.state.equation.length - 1] = 'd';
      this.setState({operation: 'd'});
    } else {
      this.state.equation.push(this.state.input);
      this.state.equation.push('d');
      this.setState({isOperation: true, operation: 'd'});
    }
  }

  equals() {
    this.state.equation.push(this.state.input);

    let equation = this.state.equation;
    console.log(equation);
    let result = equation[0];
    for (let i = 1; i < equation.length; i += 2) {
      if (equation[i] == 'a') {
        result += equation[i + 1];
      } else if (equation[i] == 's') {
        result -= equation[i + 1];
      } else if (equation[i] == 'm') {
        result *= equation[i + 1];
      } else if (equation[i] == 'd') {
        result /= equation[i + 1];
      }
    }
    this.setState({
      input: result,
      solve: true,
      equation: [],
      operation: '',
    });
  }

  clear() {
    this.setState({
      input: 0,
      equation: [],
      operation: '',
    });
  }

  render() {
    return (
      <>
        <ScrollView style={styles.scroll}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.screenText}>{this.state.input}</Text>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.lightGreyButton}
                  activeOpacity={0.6}
                  onPress={this.clear}>
                  <Text style={styles.darkButtonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.lightGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.negate()}>
                  <Text style={styles.darkButtonText}>+-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.lightGreyButton}
                  activeOpacity={0.6}
                  onLongPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.percentageSymbolText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.operation == 'd'
                      ? styles.whiteButton
                      : styles.orangeButton
                  }
                  activeOpacity={0.6}
                  onPress={() => this.divide()}
                  onLongPress={() => this.emergencyCall('C')}>
                  <Text
                    style={
                      this.state.operation == 'd'
                        ? styles.invertedText
                        : styles.symbolText
                    }>
                    ÷
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(7)}>
                  <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(8)}>
                  <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(9)}>
                  <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.operation == 'm'
                      ? styles.whiteButton
                      : styles.orangeButton
                  }
                  activeOpacity={0.6}
                  onPress={() => this.multiply()}
                  onLongPress={() => this.emergencyCall('D')}>
                  <Text
                    style={
                      this.state.operation == 'm'
                        ? styles.invertedText
                        : styles.symbolText
                    }>
                    ×
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(4)}>
                  <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(5)}>
                  <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(6)}>
                  <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.operation == 's'
                      ? styles.whiteButton
                      : styles.orangeButton
                  }
                  activeOpacity={0.6}
                  onPress={() => this.subtract()}
                  onLongPress={() => this.emergencyCall('G')}>
                  <Text
                    style={
                      this.state.operation == 's'
                        ? styles.invertedText
                        : styles.symbolText
                    }>
                    −
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(1)}>
                  <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(2)}>
                  <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.digit(3)}>
                  <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    this.state.operation == 'a'
                      ? styles.whiteButton
                      : styles.orangeButton
                  }
                  activeOpacity={0.6}
                  onPress={() => this.add()}
                  onLongPress={() => this.emergencyCall('A')}>
                  <Text
                    style={
                      this.state.operation == 'a'
                        ? styles.invertedText
                        : styles.symbolText
                    }>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.longButton} activeOpacity={0.6}>
                  <Text
                    style={styles.longButtonText}
                    onPress={() => this.digit(0)}>
                    0
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.darkGreyButton}
                  activeOpacity={0.6}
                  onPress={() => this.emergencyCall()}>
                  <Text style={styles.buttonText}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.orangeButton}
                  activeOpacity={0.6}
                  onPress={() => this.equals()}
                  onLongPress={() => this.emergencyCall('N')}>
                  <Text style={styles.symbolText}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    height: '100%',
  },
  scroll: {
    backgroundColor: Colors.black,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  sectionContainer: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  screenText: {
    width: '96%',
    fontSize: 80,
    fontWeight: '300',
    color: 'white',
    textAlign: 'right',
    marginTop: 100,
    marginBottom: 16,
  },
  whiteButton: {
    backgroundColor: '#FFFFFF',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  orangeButton: {
    backgroundColor: '#F39C12',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  lightGreyButton: {
    backgroundColor: '#E5E7E9',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  longButton: {
    backgroundColor: '#3A3A3A',
    width: 175,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  darkGreyButton: {
    backgroundColor: '#3A3A3A',
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 16,
  },
  longButtonText: {
    fontSize: 36,
    color: 'white',
    textAlign: 'left',
    marginTop: 18,
    marginLeft: 28,
  },
  buttonText: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
  },
  darkButtonText: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    marginTop: 18,
  },
  symbolText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '500',
  },
  invertedText: {
    fontSize: 40,
    color: '#F39C12',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '500',
  },
  darkSymbolText: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '500',
  },
  percentageSymbolText: {
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
});
