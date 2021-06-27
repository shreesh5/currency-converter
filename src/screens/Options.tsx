import React from 'react';
import {ScrollView, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {RowItem, RowSeparator} from '../components/RowItem';

const openLink = (url: string) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong', 'Please try again later'),
  );
const Options: React.FC = () => {
  return (
    <ScrollView>
      <RowItem
        label="Themes"
        onPress={() => Alert.alert('Todo', 'Add themes')}
        rightIcon={<Icon name="chevron-right" size={20} color="#4F6D7A" />}
      />
      <RowSeparator />
      <RowItem
        label="React Native Basics"
        onPress={() =>
          openLink(
            'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter',
          )
        }
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
      <RowSeparator />
      <RowItem
        label="React Native by Example"
        onPress={() => openLink('https://reactnativebyexample.com')}
        rightIcon={<Icon name="export" size={20} color="#4F6D7A" />}
      />
    </ScrollView>
  );
};

export default Options;
