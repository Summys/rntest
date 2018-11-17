import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Colors from '../Theme/Colors'

const styles = StyleSheet.create({
    error: {
        color: Colors.red
    }
})

export default class Error extends Component {

  render() {
    const { error } = this.props
    return (
        <Text style={styles.error}> {error} </Text>
    );
  }
}
