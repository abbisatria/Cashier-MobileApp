import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PhotoProfile from '../../assets/images/profile.jpg';
import Arrow from '../../assets/icons/arrow.svg';
import {Button, Input} from '../../components';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth';

const Profile = props => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image source={PhotoProfile} style={styles.image} />
          <Text style={styles.name}>
            {props.auth.user ? props.auth.user.name : ''}
          </Text>
          <Text style={styles.email}>
            {props.auth.user ? props.auth.user.email : ''}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModal(true)}>
          <View style={styles.row}>
            <Text style={styles.edit}>Edit Profile</Text>
            <Arrow />
          </View>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.edit}>Pusat Bantuan</Text>
          <Arrow />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Licence')}>
          <View style={styles.row}>
            <Text style={styles.edit}>Lisensi</Text>
            <Arrow />
          </View>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#000000" />
      ) : (
        <Button
          title="Log Out"
          onPress={async () => {
            setLoading(true);
            await props.logout();
            setLoading(false);
            props.navigation.navigate('Login');
          }}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <View style={styles.containerModal}>
          <View style={styles.modalView}>
            <Input placeholder="Nama" />
            <View style={styles.gap} />
            <Input placeholder="Email" />
            <View style={styles.gap} />
            <Input placeholder="Password" password />
            <View style={styles.gap} />
            <Button title="Edit Profile" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginBottom: 6,
  },
  email: {
    fontSize: 14,
    fontFamily: 'Rubik-Light',
    color: '#78746D',
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  edit: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    marginLeft: 6,
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
  gap: {
    height: 16,
  },
});
