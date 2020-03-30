import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Product from './Product';

import styles from './styles';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  function loadProducts() {
    setProducts([
      {
        id: 1,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 3,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$30,00',
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1576558345433-58e777a5e423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      }
    ]
    );
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products.map(product => <Product key={product.id} product={product} />)}
    </View>
  );
}
