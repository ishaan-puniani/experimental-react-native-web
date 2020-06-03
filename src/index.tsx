import React, {memo, useState} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Platform,
  StyleSheet,
  Button,
} from 'react-native';
// @ts-ignore
import Modal from 'modal-enhanced-react-native-web';

const appName = 'experiment_rnw';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// function WrapperComponent() {
//   const [isModalVisible, setModalVisible] = useState(true);

//   return (
//     <View>
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={() => setModalVisible(false)}>
//         <View style={{flex: 1}}>
//           <Text>I am the modal content!</Text>
//         </View>
//       </Modal>
//     </View>
//   );
// }

export const Main = memo(() => {
  const [isModalVisible, setModalVisible] = useState(false);
  console.log(isModalVisible);
  return (
    <View style={styles.container}>
      <Text>Experiment sucees for react native with web</Text>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Modal>
      {/* <Modal
        isVisible={isModalVisible}
        animationInTiming={2000}
        animationOutTiming={2000}
        backdropTransitionInTiming={2000}
        backdropTransitionOutTiming={2000}>
        <View>
          <Text>I am the modal content!</Text>
          <Button
            onPress={() => {
              debugger;
              setModalVisible(false);
            }}
            title="Model"
          />
        </View>
      </Modal> */}
      {/* <Dialog
        visible={isModalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        animationType="fade"
        wrapStyle={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={{
          width: 300,
        }}>
        <View style={{padding: 100}}>
          <Text>content</Text>
        </View>
      </Dialog> */}
      <Button
        onPress={() => {
          debugger;
          setModalVisible(true);
        }}
        title="Model"
      />
    </View>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
  //  Modal.setAppElement('#root');
}
