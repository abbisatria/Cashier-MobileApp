import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import Back from '../../assets/icons/go-back.svg';

export default class Report extends Component {
  state = {
    data: [
      {
        id: 1,
        date: '15 Mei 2021',
        time: '15:30',
        total: 'Rp. 250.000',
        transaction: [
          {
            id: 1,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 2,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 3,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 4,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 5,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 6,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
        ],
      },
      {
        id: 2,
        date: '14 Mei 2021',
        time: '15:30',
        total: 'Rp. 250.000',
        transaction: [
          {
            id: 1,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 2,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 3,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 4,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 5,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 6,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
        ],
      },
      {
        id: 3,
        date: '13 Mei 2021',
        time: '15:30',
        total: 'Rp. 250.000',
        transaction: [
          {
            id: 1,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 2,
            name: 'Dalgona',
            price: 'Rp. 20.000',
          },
          {
            id: 3,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 4,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 5,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
          {
            id: 6,
            name: 'Cappucino',
            price: 'Rp. 15.000',
          },
        ],
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.title}>Laporan Penjualan</Text>
          <View />
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Dari</Text>
            <TouchableOpacity>
              <Text style={styles.input}>Masukkan tanggal</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Sampai</Text>
            <TouchableOpacity>
              <Text style={styles.input}>Masukkan tanggal</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.content}>
              <View style={styles.rowContent}>
                <View style={styles.rowDate}>
                  <Text style={styles.date}>{item.date} • </Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.total}>{item.total}</Text>
              </View>
              {item.transaction.map((value, index) => (
                <View style={styles.rowContent} key={String(index)}>
                  <Text style={styles.name}>{value.name}</Text>
                  <Text style={styles.price}>{value.price}</Text>
                </View>
              ))}
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: '#7A7886',
  },
  input: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#4D4B57',
  },
  content: {
    marginBottom: 16,
    borderBottomColor: '#7A7886',
    borderBottomWidth: 1,
    borderTopColor: '#7A7886',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rowDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#3C3A36',
  },
  total: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#EC6F5E',
  },
  name: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#78746D',
  },
  price: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
});
