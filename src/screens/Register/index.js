import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Illustration from '../../assets/illustrations/register.svg';
import Arrow from '../../assets/icons/arrow-back.svg';
import {Button, Input} from '../../components';

export default class Register extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Arrow />
        </TouchableOpacity>
        <View style={styles.header}>
          <Illustration />
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subTitle}>Buat akunmu sekarang</Text>
        </View>
        <Input placeholder="Nama" />
        <View style={styles.gap} />
        <Input placeholder="Email" type="email-address" />
        <View style={styles.gap} />
        <Input placeholder="Password" password />
        <View style={styles.gap} />
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginTop: 50,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
  },
  gap: {
    height: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: '#78746D',
    textAlign: 'center',
    marginVertical: 16,
  },
});
