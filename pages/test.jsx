import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { keyFrames, stagger } from 'popmotion';

const COUNT = 5;
const DURATION = 4000;
const initialPhase = { scale: 0, opacity: 1 };
const constructAnimations = () =>
  [...Array(COUNT).keys()].map(() => initialPhase);

export default class test extends React.Component {
  state = {
    animations: constructAnimations(),
  };

  componentDidMount() {
    this.animateCircles();
  }

  animateCircles = () => {
    const actions = Array(COUNT).fill(
      keyframes({
        values: [initialPhase, { scale: 2, opacity: 0 }],
        duration: DURATION,
        loop: Infinity,
        yoyo: Infinity,
      })
    );

    stagger(actions, keyframes, DURATION / COUNT).start((animations) => {
      this.setState({ animations });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.animations.map(({ opacity, scale }, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'gold',
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
  },
});
