import React from 'react';
import { Container } from 'native-base';
import { Avatar } from 'react-native-elements';

import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';

export default function CouncelDetailCard() {
  return (
    <TouchableOpacity>
      <View style={styles.mycouncel1}>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
          activeOpacity={0.7}
        />
        <Text style={styles.counecelname1}>약물복용</Text>
      </View>
      <View style={styles.border}></View>

      <View style={styles.mycouncel2}>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
          activeOpacity={0.7}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          약물복용
        </Text>
        <Text style={{ fontSize: 20, marginTop: 55, marginRight: 55 }}>
          1.25
        </Text>
      </View>
      <View style={styles.border}></View>

      <View style={styles.mycouncel3}>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
          activeOpacity={0.7}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          약물복용
        </Text>
        <Text style={{ fontSize: 20, marginTop: 55, marginRight: 55 }}>
          1.25
        </Text>
      </View>
      <View style={styles.border}></View>

      <View style={styles.mycouncel4}>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
          activeOpacity={0.7}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          약물복용
        </Text>
        <Text style={{ fontSize: 20, marginTop: 55, marginRight: 55 }}>
          1.25
        </Text>
        <View style={styles.border}></View>
      </View>
      <View style={styles.mycouncel5}>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
          activeOpacity={0.7}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          약물복용
        </Text>
        <Text style={{ fontSize: 20, marginTop: 55, marginRight: 55 }}>
          1.25
        </Text>
        <View style={styles.border}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  border: {
    height: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
  },
  mycouncel1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel3: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel4: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel5: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  counecelname1: {
    fontSize: 20,
    marginTop: 55,
  },
  counecelcontent1: {
    fontSize: 120,
    marginTop: 55,
  },
});
