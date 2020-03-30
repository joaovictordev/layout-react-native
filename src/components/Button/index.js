import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ children, type, style }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        type ? styles[`button-${type}`] : {}
      ]}
    >
      <Text style={[
        styles.text,
        type ? styles[`text-${type}`] : {}
      ]}>{children}</Text>
    </TouchableOpacity>
  );
}
