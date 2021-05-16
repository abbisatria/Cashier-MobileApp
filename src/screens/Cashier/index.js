import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import Trash from '../../assets/icons/trash.svg';
import {Button} from '../../components';

export default class Cashier extends Component {
  state = {
    modalVisible: false,
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.row}>
            <Text style={styles.title}>Pesanan</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddProduct')}>
              <Text style={styles.subTitle}>+ tambah</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {[...Array(3)].map((item, index) => (
              <View style={styles.row} key={String(index)}>
                <View style={styles.product}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1603966174899-06ac3f776eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                    }}
                    style={styles.productImage}
                  />
                  <View>
                    <Text style={styles.productName}>Cappucino</Text>
                    <Text style={styles.productPrice}>Rp. 20.000</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.card}>
                    <TouchableOpacity>
                      <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.num}>1</Text>
                    <TouchableOpacity>
                      <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <Trash />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.rowPayment}>
            <Text>Total Pembayaran</Text>
            <Text>Rp. 360.000</Text>
          </View>
        </View>
        <Button
          title="Bayar Sekarang"
          onPress={() => this.setState({modalVisible: true})}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.containerModal}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.titleModal}>Total Pembayaran</Text>
                <View style={styles.rowModal}>
                  <Text style={styles.labelPrice}>Rp.</Text>
                  <TextInput
                    style={styles.inputPrice}
                    value="360.000"
                    keyboardType="number-pad"
                  />
                </View>
                <Text style={styles.titleModal}>Dibayar</Text>
                <View style={styles.rowModal}>
                  <Text style={styles.labelPrice}>Rp.</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Masukan nominal"
                    style={styles.inputPrice}
                  />
                </View>
                <Text style={styles.titleModal}>Kembalian</Text>
                <View style={styles.rowModal}>
                  <Text style={styles.labelPrice}>Rp.</Text>
                  <TextInput
                    style={styles.inputPrice}
                    value="40.000"
                    keyboardType="number-pad"
                  />
                </View>
              </View>
              <Button title="Pembayaran" />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#EC6F5E',
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
    borderRadius: 4,
    flexDirection: 'row',
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  num: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: 'white',
    borderLeftWidth: 1,
    borderLeftColor: 'white',
  },
  rowPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopColor: '#3C3A36',
    borderTopWidth: 1,
    marginVertical: 12,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  titleModal: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
  },
  rowModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#78746D',
    marginBottom: 20,
  },
  labelPrice: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
  inputPrice: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
});
