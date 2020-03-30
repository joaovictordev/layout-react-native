import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Feather name="arrow-left" size={24} style={styles.icon} />
      <Text style={styles.title}>Profile</Text>
      <Feather name="more-horizontal" size={24} style={styles.icon} />
    </View>
  );
}
