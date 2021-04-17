import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import ProgressCircleBase from './ProgressCircleBase';

var SectorOneMeasure;
var sectorTwoMeasureStartString;
var sectorTwoMeasure;
var remainingSectorMeasureStartString;
var remainingSectorMeasure;
var sectorOnePercentage;
var sectorTwoPercentage;
var remainingPercentage;
var arcLayers = [];

const TwoPartProgressCircle = ({
  categoryOnePercentage = 20,
  categoryOneColor = '#12CC32',
  categoryTwoPercentage = 50,
  categoryTwoColor = '#0080ED',
  spacer = true,
  text = '70%',
  textColor = 'black',
  textSize = 15,
  textWeight = '500',
  circleRadius = 60,
  distanceFromEdge = 3,
  ringWidth = 2,
  spacerValue = 2,
}) => {
  if (categoryOnePercentage + categoryTwoPercentage > 100) {
    console.error(
      'Total percentage exceeds 100. Please check the sum of categoryOnePercentage and categoryTwoPercentage. '
    );
    return;
  } else {
    var partCount = 2;
    sectorOnePercentage = categoryOnePercentage;
    sectorTwoPercentage = categoryTwoPercentage;
    remainingPercentage = 100 - (categoryOnePercentage + categoryTwoPercentage);

    const singleSpacer = spacerValue;
    var spacerAmount, spacerCount;

    if (spacer == true) {
      if (
        100 == sectorOnePercentage ||
        100 == sectorTwoPercentage ||
        100 == remainingPercentage
      ) {
        spacerAmount = 0;
        spacerCount = 0;
      } else if (
        sectorOnePercentage > 0 &&
        sectorTwoPercentage > 0 &&
        remainingPercentage > 0
      ) {
        spacerAmount = singleSpacer * 2;
        spacerCount = 2;
      } else {
        spacerAmount = singleSpacer;
        spacerCount = 1;
      }
    } else {
      spacerAmount = 0;
      spacerCount = 0;
    }

    const totalAndGaps = 100 - spacerAmount;
    const SectorOneMeasurePercent = (sectorOnePercentage * totalAndGaps) / 100;
    const sectorTwoMeasurePercent = (sectorTwoPercentage * totalAndGaps) / 100;
    const remainingSectorMeasurePercent =
      (remainingPercentage * totalAndGaps) / 100;

    const eachGapSectorMeasure1 =
      spacerCount != 0 ? spacerAmount / spacerCount : 0; //++
    SectorOneMeasure = (360 * SectorOneMeasurePercent) / totalAndGaps;
    sectorTwoMeasure = (360 * sectorTwoMeasurePercent) / totalAndGaps;
    remainingSectorMeasure =
      (360 * remainingSectorMeasurePercent) / totalAndGaps;
    var sectorTwoMeasureStart;
    if (categoryOnePercentage > 50) {
      sectorTwoMeasureStart = SectorOneMeasure - spacerAmount;
    } else {
      sectorTwoMeasureStart = SectorOneMeasure;
    }

    sectorTwoMeasureStartString = sectorTwoMeasureStart + 'deg';
    arcLayers = [];

    for (var i = 0; i < partCount; i++) {
      if (i == 0) {
        arcLayers.push(
          <React.Fragment key={i}>
            {
              <View style={styles.categoryOne}>
                <ProgressCircleBase
                  percent={SectorOneMeasurePercent}
                  radius={circleRadius / 2 - distanceFromEdge}
                  borderWidth={ringWidth}
                  color={categoryOneColor}
                  shadowColor="white"
                  bgColor="#fff"
                />
              </View>
            }
          </React.Fragment>
        );
      } else if (i == 1) {
        arcLayers.push(
          <React.Fragment key={i}>
            {
              <View
                style={[
                  styles.categoryTwo,
                  { transform: [{ rotateZ: sectorTwoMeasureStartString }] },
                ]}
                needsOffscreenAlphaCompositing
              >
                <ProgressCircleBase
                  percent={sectorTwoMeasurePercent}
                  radius={circleRadius / 2 - distanceFromEdge}
                  borderWidth={ringWidth}
                  color={categoryTwoColor}
                  shadowColor="#C9C9C9"
                  bgColor="#fff"
                />
              </View>
            }
          </React.Fragment>
        );
      }
    }
    const textStyle = {
      ...styles.text,
      color: textColor,
      fontSize: textSize,
      fontWeight: textWeight,
    };
    const container = {
      ...styles.markerContainer,
      height: circleRadius,
      width: circleRadius,
      borderRadius: circleRadius,
    };
    return (
      <View style={container}>
        {arcLayers}
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 45,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryOne: {
    opacity: 1,
    position: 'absolute',
  },
  categoryTwo: {
    opacity: 0.5,
    position: 'absolute',
  },
});

export default TwoPartProgressCircle;
