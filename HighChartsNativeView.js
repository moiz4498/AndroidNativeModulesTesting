import React, { Component } from 'react'
import { 
  View,
  StyleSheet,
  requireNativeComponent,
  findNodeHandle, 
} from 'react-native'

const HighCharts = requireNativeComponent('HighCharts', HighChartsView)

export default class HighChartsView extends Component {
  nativeComponentRef;
  
  componentDidMount() {
    setTimeout(()=>{
      this.findId();
    },2000);
  }

  findId = () => {
    const androidViewId = findNodeHandle(this.androidFragment);
    console.log('Native android view id seems to be ', androidViewId);
  };
  
  render () {
    return (
      <View style={styles.container}>
        <HighCharts
          style={styles.wrapper}
          ref={(nativeRef) => (this.nativeComponentRef = nativeRef)}  
        />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 400,
  },
  wrapper: {
    height: 500,
    width: 350,
  }
  
});
