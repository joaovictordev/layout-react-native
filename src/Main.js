import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

import { general } from './styles';

export default function Main() {
  return (
    <View style={general.container}>
      <Header />
      <ScrollView>
        <SubHeader />
        <ProductList />
      </ScrollView>
      <Tabs />
    </View>
  );
}
