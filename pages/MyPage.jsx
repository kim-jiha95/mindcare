import { Container } from 'native-base';
import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import { logout } from '../config/BackData';
import TwoPartProgressCircle from '../src/TwoPartProgressCircle';

import HeaderComponent from '../components/HeaderComponent';
import ProgressCircle from 'react-native-progress-circle';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class Mypage extends Component {
  render() {
    const goSignOut = () => {
      logout();
      navigation.navigate('SignIn');
    };
    return (
      <Container>
        <HeaderComponent />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 50,
          }}
        >
          <View style={{ backgroundColor: 'white', flex: 1 }}></View>
          <ProgressCircle
            percent={65}
            radius={50}
            borderWidth={8}
            color="#64FCD9"
            shadowColor="#999"
            bgColor="#fff"
          >
            <Text style={{ fontSize: 10 }}>{'평균 상담 주기'}</Text>
          </ProgressCircle>
          <View style={{ backgroundColor: 'white', flex: 1 }}></View>
          <ProgressCircle
            percent={70}
            radius={50}
            borderWidth={8}
            color="#64FCD9"
            shadowColor="#999"
            bgColor="#fff"
            width={'150'}
          >
            <Text style={{ fontSize: 10 }}>{'다음 상담 일자'}</Text>
          </ProgressCircle>
          <View style={{ backgroundColor: 'white', flex: 1 }}></View>
          <TwoPartProgressCircle
            categoryOnePercentage={50}
            categoryOneColor="#12CC32"
            categoryTwoPercentage={12.5}
            categoryTwoColor="#0080ED"
            spacer={true}
            spacerValue={2}
            text="25/40"
            textColor="black"
            textSize={15}
            textWeight="500"
            circleRadius={60}
            distanceFromEdge={3}
            ringWidth={2}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 70,
            marginLeft: 150,
          }}
        >
          <Text style={{ marginTop: 30, marginRight: 10 }}>일자 </Text>
          <Text style={{ marginLeft: 30, marginTop: 30 }}>시간 </Text>
          <Text style={{ marginLeft: 40, marginTop: 30 }}>상태 </Text>
        </View>

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
            onPress={() => console.log('Works!')}
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
            onPress={() => console.log('Works!')}
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

        {/* //okay142 */}

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
            activeOpacity={0.7}
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
            onPress={() => console.log('Works!')}
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
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  border: {
    height: 3,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    marginLeft: 40,
  },
});
