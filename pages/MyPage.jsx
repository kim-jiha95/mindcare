import { Container } from 'native-base';
import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import { logout } from '../config/BackData';
import HeaderComponent from '../components/HeaderComponent';
import ProgressCircle from 'react-native-progress-circle';
import { Avatar } from 'react-native-elements';

// const Circle = () => {
//   return <View style={styles.circle} />;
// };
// StyleSheet.create({
//   Circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//     backgroundColor: 'red',
//   },
// });

export default class Mypage extends Component {
  render() {
    // const goSignOut = () => {
    //   logout();
    //   navigation.navigate('SignIn');
    // };
    return (
      <Container>
        <HeaderComponent />
        {/* <TouchableOpacity style={{ marginTop: 120 }} onPress={goSignOut}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity> */}

        <ProgressCircle
          // width="250"
          percent={65}
          radius={50}
          borderWidth={8}
          color="#64FCD9"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 10 }}>{'평균 상담 주기'}</Text>
        </ProgressCircle>
        <ProgressCircle
          percent={70}
          radius={50}
          borderWidth={8}
          color="#64FCD9"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 10 }}>{'다음 상담 일자'}</Text>
        </ProgressCircle>

        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          // containerStyle={{ flex: 3, marginTop: 100 }}
          containerStyle={{ flex: 1, marginTop: 10, marginLeft: 20 }}
        />
        <View style={styles.border}></View>

        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ flex: 1, marginTop: 10, marginLeft: 20 }}
        />
        <View style={styles.border}></View>
        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ flex: 1, marginTop: 10, marginLeft: 20 }}
        />
        <View style={styles.border}></View>

        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <View style={styles.border}></View>

        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />
        <View style={styles.border}></View>

        <Avatar
          size="medium"
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          containerStyle={{ marginTop: 10, marginLeft: 20 }}
        />

        <View>
          <Text 일자 />
          <Text 시간 />
          <Text 상태 />
        </View>
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
// export default function MyPage(navigation) {
//   // const goSignOut = () => {
//   //   logout();
//   //   navigation.navigate('SignIn');
//   // };

//   // return (
//   //   <Container>
//   //     <HeaderComponent />

//   //     {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={goSignOut}>
//   //       <Text style={styles.logout}>로그아웃</Text>
//   //     </TouchableOpacity> */}
//   //   </Container>
//   // );
//   render();
//   {
//     return (
//       <ProgressCircle
//         percent={30}
//         radius={50}
//         borderWidth={8}
//         color="#3399FF"
//         shadowColor="#999"
//         bgColor="#fff"
//       >
//         <Text style={{ fontSize: 18 }}>{'30%'}</Text>
//       </ProgressCircle>
//     );
//   }
// }

// const styles = StyleSheet.create({});
