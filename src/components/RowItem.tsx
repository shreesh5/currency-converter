import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

type Props = {
  rightIcon: JSX.Element;
  label: string;
  onPress: () => void;
};

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

export const RowItem: React.FC<Props> = ({
  rightIcon,
  label,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator: React.FC = () => <View style={styles.separator} />;
