import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

export default function SubHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMjI4NDcyNjQxNl5BMl5BanBnXkFtZTgwMzI4OTM3NjM@._V1_UY256_CR13,0,172,256_AL_.jpg' }}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>Mia Denys</Text>
        <Text style={styles.description}>Desenvolvedor Frontend testando seus conhecimentos em elaborar layouts para mobile.</Text>

        <View style={styles.buttonsContainer}>
          <Button style={styles.firstButton}>Message</Button>
          <Button type="outline">Follow</Button>
        </View>
      </View>
    </View>
  );
}
