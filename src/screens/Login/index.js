import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Illustration from '../../assets/illustrations/login.svg';
import {Button, Input} from '../../components';

export default class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Illustration />
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subTitle}>Kelola kasirmu sekarang</Text>
        </View>
        <Input placeholder="Email" type="email-address" />
        <View style={styles.gap} />
        <Input placeholder="Password" password />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.text}>Lupa Password?</Text>
        </TouchableOpacity>
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate('MainApp')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.text}>Register</Text>
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
