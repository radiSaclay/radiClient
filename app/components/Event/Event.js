import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Event extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => Actions.EventDetail(this.props)} >
        <View>
          <Text style={styles.product}>
            {this.props.product}
          </Text>
          <View style={styles.subtitle}>
            <Text style={styles.producer}>
              {this.props.producer}
            </Text>
            <Text style={styles.daysLeft}>
              {this.props.daysLeft}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Event;
