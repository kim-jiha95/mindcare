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
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

export default function HomePage({ navigation }) {
  return (
    <Container>
      <HeaderComponent />
      {/* <Image style={styles.Survey} source={require('../assets/survey.png')} /> */}
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

      {/* <SurveyLinkPage /> */}
      <Image style={styles.Message} source={require('../assets/Message.png')} />
      <View
        style={{
          flex: 1,
          maraginbottom: 150,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: 50,
        }}
      >
        <GradientButton
          style={{ marginTop: 200 }}
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
        />
        <GradientButton
          text="마인드케어 체험해보기"
          width="70%"
          style={{ marginTop: 50 }}
          blueMarine
          impact
          onPressAction={() => Linking.openURL(`tel:01051252908`)}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  Message: {
    width: 250,
    height: 200,
    left: 60,
    top: 120,
    borderRadius: 15,
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
