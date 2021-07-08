import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Illustration from '../../assets/illustrations/login.svg';
import {Button, Input} from '../../components';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';
import {showMessage} from '../../helpers/showMessage';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };
  submit = async () => {
    this.setState({loading: true});
    await this.props.login(this.state.email, this.state.password);
    if (this.props.auth.token) {
      this.setState({loading: false});
      showMessage('Login Success', 'success');
      this.props.navigation.replace('MainApp');
    } else {
      this.setState({loading: false});
      showMessage(this.props.auth.errorMsg);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Illustration />
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subTitle}>Kelola kasirmu sekarang</Text>
        </View>
        <Input
          placeholder="Email"
          type="email-address"
          onChange={email => this.setState({email})}
        />
        <View style={styles.gap} />
        <Input
          placeholder="Password"
          password
          onChange={password => this.setState({password})}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.text}>Lupa Password?</Text>
        </TouchableOpacity>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#000000" />
        ) : (
          <Button title="Log in" onPress={() => this.submit()} />
        )}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
