import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import IcHomeOn from '../../assets/icons/home-on.svg';
import IcHomeOff from '../../assets/icons/home-off.svg';
import IcKasirOn from '../../assets/icons/kasir-on.svg';
import IcKasirOff from '../../assets/icons/kasir-off.svg';
import IcProfileOn from '../../assets/icons/profile-on.svg';
import IcProfileOff from '../../assets/icons/profile-off.svg';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <View style={styles.row}>
          <IcHomeOn />
          <Text style={styles.title('#EC6F5E')}>Home</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcHomeOff />
          <Text style={styles.title('#BEBAB3')}>Home</Text>
        </View>
      );
    case 'Kasir':
      return focus ? (
        <View style={styles.row}>
          <IcKasirOn />
          <Text style={styles.title('#EC6F5E')}>Kasir</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcKasirOff />
          <Text style={styles.title('#BEBAB3')}>Kasir</Text>
        </View>
      );
    case 'Profile':
      return focus ? (
        <View style={styles.row}>
          <IcProfileOn />
          <Text style={styles.title('#EC6F5E')}>Profile</Text>
        </View>
      ) : (
        <View style={styles.row}>
          <IcProfileOff />
          <Text style={styles.title('#BEBAB3')}>Profile</Text>
        </View>
      );
    default:
      return <IcHomeOn />;
  }
};

export default function BottomNavigator({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPrevenDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={String(index)}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestId}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon label={label} focus={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 27,
    justifyContent: 'space-between',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#BEBAB3',
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderBottomWidth: 0,
  },
  row: {
    alignItems: 'center',
  },
  title: value => ({
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: value,
  }),
});
