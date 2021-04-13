import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

export default function ListCate() {
  if (title == select) {
    return (
      <TouchableOpacity style={[styles.box, styles.activeBox]}>
        <Text style={[styles.text, styles.activeText]}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.box, styles.defaultBox]}
        // onPress={async () => {
        //   setFunc(title);
        //   getData();
        // }}
      >
        <Text style={[styles.text, styles.defaultText]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    marginEnd: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultBox: {
    backgroundColor: '#F7F7F7',
  },
  activeBox: {
    backgroundColor: '#555',
  },
  text: {
    fontSize: 15,
  },
  defaultText: {
    color: '#AAA',
  },
  activeText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
