import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

import Event from '../../components/Event'

class EventDetail extends Component {
  render(rowData) {
    return(
      <View style={styles.container}>
        <Text style={styles.product}>
          {this.props.product}
        </Text>
        <Text style={styles.producer}>
          {this.props.producer}
        </Text>
        <Text style={styles.daysLeft}>
          {this.props.daysLeft}
        </Text>
      </View>
    )
  }
}

export default EventDetail;
