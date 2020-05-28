import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.screenText}> 69</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.lightGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.darkButtonText}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.lightGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.darkButtonText}>+-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.lightGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.percentageSymbolText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}>
                <Text style={styles.symbolText}>÷</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}>
                <Text style={styles.symbolText}>×</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}>
                <Text style={styles.symbolText}>−</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}>
                <Text style={styles.symbolText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.longButton}
                activeOpacity={0.6}>
                <Text style={styles.longButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.darkGreyButton}
                activeOpacity={0.6}>
                <Text style={styles.buttonText}>,</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}>
                <Text style={styles.symbolText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    height: '100%',
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
    fontSize: 72,
    fontWeight: '300',
    color: 'white',
    textAlign: 'right',
    marginTop: 180,
    marginBottom: 16,
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
  }
});
