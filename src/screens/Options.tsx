import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import RowItem from '../components/RowItem';

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const Options: React.FC = () => {
  return (
    <View>
      <RowItem
        label="Themes"
        onPress={() => alert('Todo')}
        rightIcon={<Icon name="chevron-right" size={20} color="#4F6D7A" />}
      />
      <View style={styles.separator} />
      <RowItem
        label="React Native Basics"
        onPress={() => alert('Todo - link')}
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
      <View style={styles.separator} />
      <RowItem
        label="React Native by Example"
        onPress={() => alert('Todo - line 2')}
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
    </View>
  );
};

export default Options;
