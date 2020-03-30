import React from 'react';
import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Product({ product: { image, title, description, price } }) {
  return (
    <View style={styles.container}>
      <Feather name='check-circle' size={26} style={styles.checkIcon} />
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}
