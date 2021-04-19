import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, textColor, style } from 'react-native';
import { Chip } from 'react-native-paper';

const CheckBox = (hurt) => {
  const { chipKey, value, chipPressed, sel } = hurt;

  const [selected, setSelected] = useState(false);
  const [textColor, setTextColor] = useState(`#FBA200`);
  const [style, setStyle] = useState({
    borderColor: `#FBA200`,
    backgroundColor: `white`,
  });

  useEffect(() => {
    if (selected) {
      setTextColor(`white`);
      setStyle({
        borderColor: `#FBA200`,
        backgroundColor: `#FBA200`,
        margin: 5,
      });
    } else {
      setTextColor(`black`);
      setStyle({
        borderColor: `#FBA200`,
        backgroundColor: `transparent`,
        borderWidth: 2,
        margin: 5,
      });
    }
  }, [selected]);

  const handlePress = () => {
    setSelected(!selected);
    if (chipPressed) {
      chipPressed(selected);
    }
  };
  console.log(hurt.hurt);

  return (
    <Chip
      mode="outlined"
      style={style}
      selected={selected}
      selectedColor={textColor}
      onPress={handlePress}
    >
      <Text>{hurt.hurt}</Text>
    </Chip>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  Chip: {},
});
