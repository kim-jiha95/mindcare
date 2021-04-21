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

export default function MyCouncelCard({ navigation }) {
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
    <TouchableOpacity
      style={styles.CouncelrCard}
      // onPress={() => navigation.navigate('MyDetailPage')}
    >
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
            icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
            activeOpacity={0.7}
            containerStyle={{ marginTop: 10, marginLeft: 20 }}
          />
          <Text style={styles.sort}>교우관계</Text>
        </View>
        <Text style={styles.content}>
          저번보다 학교,학원 친구들과 잘 지내게 됨
        </Text>

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
            icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
            activeOpacity={0.7}
            containerStyle={{ marginTop: 10, marginLeft: 20 }}
          />
          <Text style={styles.sort}>학업</Text>
        </View>
        <Text style={styles.content}>
          과학에 흥미를 가지고 과학자라는 꿈을 가지게 됨
        </Text>
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
            icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
            activeOpacity={0.7}
            containerStyle={{ marginTop: 10, marginLeft: 20 }}
          />
          <Text style={styles.sort}>가족</Text>
        </View>
        <Text style={styles.content}>
          언니가 가출해서 방어기제가 강해졌으나 최근 가족이 화목해짐
        </Text>

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
            icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
            activeOpacity={0.7}
            containerStyle={{ marginTop: 10, marginLeft: 20 }}
          />
          <Text style={styles.sort}>이성</Text>
        </View>
        <Text style={styles.content}>짝사랑 하던 학원친구와 교제를 시작함</Text>
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
            icon={{ name: 'star', color: 'orange', type: 'font-awesome' }}
            onPress={() => console.log('Works!')}
            containerStyle={{ marginTop: 10, marginLeft: 20 }}
          />
          <Text style={styles.sort}>진로</Text>
        </View>
        <Text style={styles.content}>
          과학자의 꿈을 가지게 되었고, 뇌과학 및 양자역학에 관심을 가짐
        </Text>
        <View style={styles.border}></View>
      </ScrollView>
    </TouchableOpacity>
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
  content: {
    marginLeft: 75,
    marginBottom: 15,
  },
  sort: {
    fontSize: 20,
    marginTop: 25,
    marginLeft: 5,
  },
});
