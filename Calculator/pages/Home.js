import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tenshi Calculator</Text>
            <Text style={styles.sectionDescription}>
              An app to get you help when you need it most, quickly and
              covertly.
            </Text>
            <Text style={styles.sectionSubtitle}>How to Use</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}
                onPress={() => this.equals()}>
                <Text style={styles.symbolText}>=</Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                Long Press to Call SAPS Emergency Services
              </Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}
                onPress={() => this.equals()}>
                <Text style={styles.symbolText}>×</Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                Long Press to Call Domestic Violence Hotline
              </Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}
                onPress={() => this.equals()}>
                <Text style={styles.symbolText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                Long Press to Call the GBV Command Centre
              </Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}
                onPress={() => this.equals()}>
                <Text style={styles.symbolText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Long Press to Call an Ambulance</Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.orangeButton}
                activeOpacity={0.6}
                onPress={() => this.equals()}>
                <Text style={styles.symbolText}>÷</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Long Press to Call Childline</Text>
            </View>
            <Text style={styles.text}>
              Tenshi Calculator also functions as a standard calculator, and can
              perform all basic arithmetic operations.
            </Text>
            <Text style={styles.sectionSubtitle}>Resources</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  'https://www.saps.gov.za/resource_centre/women_children/women_children.php',
                )
              }>
              <Text style={styles.linkText}>SAPS Women's Network</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.link}
              onPress={() => Linking.openURL('http://www.powa.co.za')}>
              <Text style={styles.linkText}>People Opposed to Woman Abuse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.link}
              onPress={() => Linking.openURL('http://www.tears.co.za/')}>
              <Text style={styles.linkText}>TEARS Foundation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.link}
              onPress={() => Linking.openURL('http://isssasa.org.za')}>
              <Text style={styles.linkText}>Thuthuzela Care Centres</Text>
            </TouchableOpacity>
            <Text style={styles.version}>Version 1.0</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  scroll: {
    backgroundColor: Colors.white,
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
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionSubtitle: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '500',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark,
  },
  orangeButton: {
    backgroundColor: '#F39C12',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  symbolText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  linkText: {
    fontSize: 18,
    color: 'black',
    marginTop: 6,
    marginLeft: 5,
  },
  link: {
    height: 40,
    width: '80%',
    borderWidth: 2,
    borderColor: '#F39C12',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
  version: {
    bottom: 0,
    marginTop: 100,
    marginBottom: 10,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
});
