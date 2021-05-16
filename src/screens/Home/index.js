import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {Chart} from '../../components';

export default class Home extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Cappucino',
        image:
          'https://images.unsplash.com/photo-1603966174899-06ac3f776eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 'Rp. 20.000',
      },
      {
        id: 2,
        name: 'Dalgona',
        image:
          'https://images.unsplash.com/photo-1589786742185-2b1da4a561b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 'Rp. 25.000',
      },
      {
        id: 3,
        name: 'Milk Shake',
        image:
          'https://images.unsplash.com/photo-1592284441902-bd5fde3e6f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 'Rp. 125.000',
      },
    ],
  };
  render() {
    const data = [
      {label: 'Sen', value: 500},
      {label: 'Sel', value: 312},
      {label: 'Rab', value: 424},
      {label: 'Kam', value: 745},
      {label: 'Jum', value: 89},
      {label: 'Sab', value: 434},
      {label: 'Ming', value: 650},
    ];
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Laporan Penjualan</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Pendapatan Keseluruhan</Text>
            <Text style={styles.cardSubTitle}>Rp. 2.000.000</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Report')}>
              <Text style={styles.cardText}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Produk Terlaris</Text>
          <FlatList
            data={this.state.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.product}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.chart}>
          <Chart data={data} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#E3562A',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingBottom: 6,
    paddingTop: 18,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: 'white',
    marginBottom: 18,
  },
  cardSubTitle: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
    color: 'white',
    marginBottom: 23,
  },
  cardText: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: 'white',
    textAlign: 'right',
  },
  content: {
    marginBottom: 25,
  },
  product: {
    marginRight: 15,
    width: 110,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 16,
    width: 110,
    height: 110,
  },
  name: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginTop: 5,
  },
  price: {
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
});
