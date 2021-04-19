import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { WebView } from 'react-native-webview';

export default function SurveyLinkPage({ route }) {
  Link = route.params;
  return (
    <Container>
      <View style={styles.container}>
        <WebView
          source={{
            uri: Link,
          }}
        />
      </View>
    </Container>
  );
}

const styles = {
  container: {
    flex: 1,
  },
};
