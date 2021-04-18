import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const Test1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.timetable1}>
              <TouchableOpacity>
                <Image
                  style={styles.time1}
                  source={require('../assets/rbutton1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.time2}
                  source={require('../assets/rbutton2.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.timetable2}>
              <TouchableOpacity>
                <Image
                  style={styles.time3}
                  source={require('../assets/rbutton3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.time4}
                  source={require('../assets/rbutton4.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.timetable3}>
              <TouchableOpacity>
                <Image
                  style={styles.time5}
                  source={require('../assets/rbutton5.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.time6}
                  source={require('../assets/rbutton6.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.timetable4}>
              <TouchableOpacity>
                <Image
                  style={styles.time7}
                  source={require('../assets/rbutton7.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.time8}
                  source={require('../assets/rbutton8.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.timetable5}>
              <TouchableOpacity>
                <Image
                  style={styles.time9}
                  source={require('../assets/rbutton9.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.time10}
                  source={require('../assets/rbutton10.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.timetable6}>
              <TouchableOpacity>
                <Image
                  style={styles.time11}
                  source={require('../assets/rbutton11.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.time12}
                  source={require('../assets/rbutton12.png')}
                />
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>뒤로가기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>day_picker_confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  timetable1: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable3: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable4: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable5: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable6: {
    flexDirection: 'row',
    marginTop: 10,
  },
  time2: {
    marginLeft: 5,
  },
  time4: {
    marginLeft: 5,
  },
  time6: {
    marginLeft: 5,
  },
  time8: {
    marginLeft: 5,
  },
  time10: {
    marginLeft: 5,
  },
  time12: {
    marginLeft: 5,
  },
});

export default Test1;
