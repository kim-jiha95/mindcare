import { Container } from 'native-base';
import React, { useRef } from 'react';
import GradientButton from 'react-native-gradient-buttons';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
  WebView,
  TextPropTypes,
  Button,
  ImageBackground,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

// import { AsyncStorage } from 'react-native';
import { logout } from '../config/BackData';

import back from '../assets/back.png';
import feel from '../assets/feel.png';
import mood from '../assets/mood.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomePage({ navigation }) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignIn');
  };
  return (
    <Container>
      <HeaderComponent />
      {/* <Button
        style={styles.SurveyButton}
        title="당신의 마음을 알아보세요"
        color="#f194ff"
        onPress={() => navigation.navigate('SurveyPage')}
      />
      <Button
        style={styles.experienceButton}
        title="마인드케어 체험해보기"
        color="#f194ff"
        onPress={() => Linking.openURL(`tel:01051252908`)}
      /> */}

      {/* <SurveyLinkPage />  */}
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.navigate('SurveyPage')}>
            <Image
              style={styles.Message}
              source={require('../assets/Group.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SurveyPage')}>
            <Image
              style={styles.Message}
              source={require('../assets/Saly1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SurveyPage')}>
            <Image
              style={styles.Message}
              source={require('../assets/Message.png')}
            />
          </TouchableOpacity>
          {/* <Image
            style={styles.Message}
            source={require('../assets/Message.png')}
          /> */}
        </ScrollView>
        {/* <View
          style={{
            flex: 1,
            maraginbottom: 100,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginVertical: 50,
          }}
        > */}
        {/* <ScrollView> */}
        {/* 고민카테고리 */}
        {/* <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity>
                <ImageBackground
                  source={mood}
                  style={{
                    marginTop: 50,
                    borderRadius: 10,
                    width: 400,
                    height: 300,
                    resizeMode: 'contain',

                    opacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, margin: 20, color: 'white' }}>
                    숨겨진뜻이 있는 사람보다{'\n'}보이는 맘이 있는 사람이
                    좋아진다.
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageBackground
                  source={feel}
                  style={{
                    marginTop: 50,
                    borderRadius: 10,
                    width: 400,
                    height: 300,
                    resizeMode: 'contain',

                    opacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, margin: 20, color: 'white' }}>
                    넌 행복이 어울리는 사람이야{'\n'}행복말고는 답이 없다구!
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageBackground
                  source={back}
                  style={{
                    marginTop: 50,
                    borderRadius: 10,
                    width: 400,
                    height: 300,
                    resizeMode: 'contain',

                    opacity: 0.8,
                  }}
                >
                  <Text style={{ fontSize: 20, margin: 20, color: 'white' }}>
                    남들이 알아주는게 뭐가 중요해?{'\n'}내가 행복하면 그만이지!
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </ScrollView>
          </ScrollView> */}

        {/* <GradientButton
            style={{ marginTop: 50 }}
            position={'absolute'}
            text="당신의 마음을 알아보세요"
            textStyle={{ fontSize: 20 }}
            gradientBegin="#874f00"
            gradientEnd="#f5ba57"
            gradientDirection="diagonal"
            height={60}
            width={300}
            radius={15}
            impact
            impactStyle="Light"
            onPressAction={() => navigation.navigate('SurveyPage')}
          /> */}

        <GradientButton
          text="마인드케어 체험해보기"
          width="70%"
          style={{ marginTop: 150, left: 50 }}
          blueMarine
          impact
          onPressAction={() => Linking.openURL(`tel:01051252908`)}
        />
        <TouchableOpacity style={{ marginTop: 20 }} onPress={goSignOut}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity>
        {/* </View> */}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  Message: {
    width: 250,
    height: 200,
    left: 60,
    top: 20,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  SurveyButton: {
    width: 50,
    height: 100,
    left: 60,
    top: 220,
  },
  Survey: {
    width: 150,
    height: 150,
    left: 60,
    top: 100,
  },
});
