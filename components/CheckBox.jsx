import * as React from 'react';
import { Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckHurt = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckHurt;
