import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';

class EventsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hi, I am the second page! 
        </Text>
      </View>
    );
  }
}

export default EventsList;
