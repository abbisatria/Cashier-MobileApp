import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Arrow from '../../assets/icons/arrow-back.svg';

const Licence = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow />
        </TouchableOpacity>
        <Text style={styles.title}>Lisensi</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Hak Anda. WhatsApp tidak mengklaim kepemilikan informasi yang Anda
          kirimkan untuk akun WhatsApp Anda atau melalui Layanan kami. Anda
          harus memiliki hak yang diperlukan atas informasi yang Anda kirimkan
          untuk akun WhatsApp Anda atau melalui Layanan kami dan hak untuk
          memberikan hak dan lisensi dalam Ketentuan kami. {'\n \n'}Hak
          WhatsApp. Kami memiliki semua hak cipta, merek dagang, domain, logo,
          pakaian dagang, rahasia dagang, paten, dan hak kekayaan intelektual
          lainnya yang terkait dengan Layanan kami. {'\n \n'}
          Lisensi Anda untuk WhatsApp. Untuk mengoperasikan dan menyediakan
          Layanan kami, Anda memberikan WhatsApp lisensi di seluruh dunia,
          non-eksklusif, bebas royalti, dapat disublisensikan, dan dapat
          dialihkan untuk menggunakan, mereproduksi, mendistribusikan, membuat
          karya turunan, menampilkan, dan menampilkan informasi (termasuk konten
          ) yang Anda unggah, serahkan, simpan, kirim, atau terima pada atau
          melalui Layanan kami. Hak yang Anda berikan dalam lisensi ini adalah
          untuk tujuan terbatas dalam mengoperasikan dan menyediakan Layanan
          kami (seperti untuk memungkinkan kami menampilkan gambar profil dan
          pesan status Anda, mengirimkan pesan Anda, menyimpan pesan Anda yang
          tidak terkirim di server kami hingga 30 hari sebagai kami mencoba
          mengirimkannya, dan sebaliknya seperti yang dijelaskan dalam Kebijakan
          Privasi kami). {'\n \n'}Lisensi WhatsApp untuk Anda. Kami memberi Anda
          lisensi terbatas, dapat dibatalkan, tidak eksklusif, tidak dapat
          disublisensikan, dan tidak dapat dialihkan untuk menggunakan Layanan
          kami, tunduk pada dan sesuai dengan Ketentuan kami. Lisensi ini
          semata-mata untuk memungkinkan Anda menggunakan Layanan kami, dengan
          cara yang diizinkan oleh Ketentuan kami. Tidak ada lisensi atau hak
          yang diberikan kepada Anda secara tersirat atau sebaliknya, kecuali
          untuk lisensi dan hak yang secara tegas diberikan kepada Anda.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Licence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingLeft: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Rubik-Medium',
    color: '#3C3A36',
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    fontFamily: 'Rubik-Regular',
    color: '#78746D',
    paddingHorizontal: 32,
  },
});
