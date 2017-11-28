/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelloComponent extends Component {
  render() {
    return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello {this.props.name}</Text>;
  }
}

//var HelloComponent = React.createClass({
//  render(){
//    return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello 2</Text>;
//  }
//});

//function HelloComponent() {
//  return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello 2</Text>;
//}
//module.exports = HelloComponent;
