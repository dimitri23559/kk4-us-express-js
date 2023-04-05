import { View, Text } from 'react-native';
import React from 'react';
import { Icon, Input } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

const InputCustom = ({action}) => {

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon name='maximize-outline' />
    </TouchableWithoutFeedback>
  );
  return (
    <Input
      placeholder='Cari Sesuatu'
      accessoryLeft={renderIcon}
      style={{ height: 50 }}
      size='small'
      onChangeText={(text) => {
        action(text)
      }}
    />
  );
};

export default InputCustom;