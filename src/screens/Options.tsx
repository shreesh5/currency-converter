import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#343434',
  },
  separator: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const Options: React.FC = () => {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Icon name="chevron-right" size={20} color="#4F6D7A" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
        <Icon name="export" size={20} color="#4F6D7A" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
        <Icon name="export" size={20} color="#4F6D7A" />
      </TouchableOpacity>
    </View>
  );
};

export default Options;
