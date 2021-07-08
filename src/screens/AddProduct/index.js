import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button} from '../../components';
import Search from '../../assets/icons/search.svg';
import http from '../../helpers/http';
import profile from '../../assets/images/profile.jpg';

const AddProduct = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({
    item: [],
    total: 0,
  });
  const fetch = async () => {
    try {
      const result = await http().get('product/');
      setData(result.data.results);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const addOrder = id => {
    const filterData = data.filter(item => item.id === id);
    const add = [...order.item, ...filterData];
    const result = add.map(item => ({
      ...item,
      shop: 1,
    }));
    const total = add.map(x => x.price).reduce((a, b) => a + b);
    setOrder({
      item: result,
      total: total,
    });
  };
  useEffect(() => {
    fetch();
  }, []);
  console.log(order);
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.input}>
          <Search />
          <TextInput placeholder="Search..." style={styles.textInput} />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#000000" />
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.row}>
                <View style={styles.product}>
                  {item.image ? (
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.productImage}
                    />
                  ) : (
                    <Image source={profile} style={styles.productImage} />
                  )}
                  <View>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => addOrder(item.id)}>
                  <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <View style={styles.button}>
        <Button
          title={`Pesanan • ${order.item.length} Item • Rp. ${order.total}`}
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default AddProduct;

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
