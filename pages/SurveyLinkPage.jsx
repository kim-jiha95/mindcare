import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { WebView } from 'react-native-webview';

const styles = {
  container: {
    flex: 1,
  },
};

const SurveyLink = (Link) => (
  <View style={styles.container}>
    <WebView
      source={{
        uri:
          'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC',
      }}
    />
  </View>
);

export default function SurveyLinkPage() {
  return (
    <Container>
      <SurveyLink />
    </Container>
  );
}
