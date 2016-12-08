import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

class Event extends Component {
  render() {
    return (
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
    );
  }
}

export default Event;
