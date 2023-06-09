import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../assets/utils/Dimentions';
import Colors from '../assets/utils/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
// text
const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign
          name={iconType}
          size={30}
          color={Colors.BLACK}
          style={{fontWeight: 'bold'}}
        />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={Colors.PLACEHOLDER}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    width: '100%',
    height: windowHeight / 15,
    borderColor: Colors.BLACK,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHILE,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: Colors.BLACK,
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    paddingRight: 30,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Quicksand-SemiBold',
    color: Colors.TEXT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
