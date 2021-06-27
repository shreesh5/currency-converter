import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {RowItem, RowSeparator} from '../components/RowItem';

const Options: React.FC = () => {
  return (
    <View>
      <RowItem
        label="Themes"
        onPress={() => alert('Todo')}
        rightIcon={<Icon name="chevron-right" size={20} color="#4F6D7A" />}
      />
      <RowSeparator />
      <RowItem
        label="React Native Basics"
        onPress={() => alert('Todo - link')}
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
      <RowSeparator />
      <RowItem
        label="React Native by Example"
        onPress={() => alert('Todo - line 2')}
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
    </View>
  );
};

export default Options;
