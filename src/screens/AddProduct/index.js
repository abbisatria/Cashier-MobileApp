import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Button} from '../../components';
import Search from '../../assets/icons/search.svg';

export default class AddProduct extends Component {
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
        price: 'Rp. 15.000',
      },
      {
        id: 4,
        name: 'Green Tea',
        image:
          'https://images.unsplash.com/photo-1582785513054-8d1bf9d69c1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        price: 'Rp. 25.000',
      },
      {
        id: 5,
        name: 'Smoothie',
        image:
          'https://images.unsplash.com/photo-1542115655-1ed9cbbf7140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
        price: 'Rp. 35.000',
      },
      {
        id: 6,
        name: 'Sakura Latte',
        image:
          'https://images.unsplash.com/photo-1592284441672-6393fd6dd564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 'Rp. 25.000',
      },
      {
        id: 7,
        name: 'Iced Tea',
        image:
          'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
        price: 'Rp. 15.000',
      },
      {
        id: 8,
        name: 'Love Cocktails',
        image:
          'https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
        price: 'Rp. 15.000',
      },
      {
        id: 9,
        name: 'Jelly Dessert',
        image:
          'https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 'Rp. 20.000',
      },
      {
        id: 10,
        name: 'Detox Water',
        image:
          'https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 'Rp. 30.000',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.input}>
            <Search />
            <TextInput placeholder="Search..." style={styles.textInput} />
          </View>
          <FlatList
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.row}>
                <View style={styles.product}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={styles.productImage}
                  />
                  <View>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.card}>
                  <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Pesanan • 3 Item • Rp. 50.000"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  input: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#78746D',
    paddingHorizontal: 10,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 15,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  product: {
    flexDirection: 'row',
  },
  productImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  productName: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
  },
  productPrice: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
  card: {
    backgroundColor: '#EC6F5E',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  plus: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
  button: {
    marginTop: 14,
  },
});
