import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './src/signin'; 



export default class App extends React.Component {
  render() {
    return (
      <View style= {{flex:1}}>
        <Signin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
