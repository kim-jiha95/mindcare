import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default function CouncelCard() {
  return (
    //  {backdata 완성시}
    // <TouchableOpacity
    //   style={styles.CouncelCard}
    //   onPress={() => navigation.navigate('MyDetailPage', CouncelList)}
    // >
    //   <View style={styles.MyCouncel} />
    //   <Avatar
    //     size="medium"
    //     overlayContainerStyle={{ backgroundColor: 'white' }}
    //     icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
    //     activeOpacity={0.7}
    //     containerStyle={{ marginTop: 10, marginLeft: 20 }}
    //     style={styles.leap}
    //   />
    //   <Text style={styles.CouncelNum}>n회차</Text>

    //   <Text style={styles.CouncelDay}>1.25</Text>
    //   <Text style={styles.CouncelTime}>15:30~16:20</Text>
    //   <Text style={styles.CouncelCondition}>☀</Text>
    //   <View style={styles.border}></View>
    // </TouchableOpacity>
    // {하드코딩}
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          1회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          1.25
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>

      <View style={styles.border}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          2회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          2.17
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>
      <View style={styles.border}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          3회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          1.25
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>

      <View style={styles.border}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          4회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          1.25
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>
      <View style={styles.border}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          5회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          1.25
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>
      <View style={styles.border}></View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'white' }}
          icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 5 }}>
          6회차
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 20 }}>
          1.25
        </Text>
        <Text style={{ fontSize: 10, marginTop: 15, marginLeft: 20 }}>
          15:30~16:20
        </Text>
        <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 40 }}>☀</Text>
      </View>
      <View style={styles.border}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Mycouncel: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  leap: {
    // size: 'medium',
    // backgroundColor: 'white',
    // //    iconname: 'pagelines', color: 'green', type: 'font-awesome',
    // activeOpacity: 0.7,
    // marginTop: 10,
    // marginLeft: 20,
  },
  CouncelNum: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 5,
  },
  CouncelDay: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  CouncelTime: {
    fontSize: 10,
    marginTop: 15,
    marginLeft: 20,
  },
  CouncelCondition: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 40,
  },
  border: {
    height: 3,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    marginLeft: 40,
  },
});
