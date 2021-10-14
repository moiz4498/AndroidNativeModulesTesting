import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';

import HelloWorldSquare from './HelloWorldSquareNativeView';
import HighCharts from './HighChartsNativeView';

const App = () => {
  
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>hello from React Native</Text>
        <HelloWorldSquare exampleProp="this is prop from RN to Native..." style={styles.square}/>
        <HighCharts style={styles.chart} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  square: {
    height: 400,
    width: 200,
  },
  chart: {
    height: 500,
    width: 400,
  }
  
});

export default App;
