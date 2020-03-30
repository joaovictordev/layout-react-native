import React from 'react';
import { View } from 'react-native';
import { Feather } from "@expo/vector-icons";

import styles from './styles';

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Feather name='copy' size={16} style={[styles.icon, styles.active]} />
      <Feather name='search' size={16} style={styles.icon} />

      <View style={styles.main}>
        <Feather name='plus' size={16} style={styles.mainIcon} />
      </View>

      <Feather name='bell' size={16} style={styles.icon} />
      <Feather name='user' size={16} style={styles.icon} />
    </View>
  );
}
