import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {React, useState, useEffect} from 'react';
export default ({navigation}) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#1E90FF'}}>
      <View style={styles.inPutContainer}>
        <View style={styles.inputRow}>
          <Text style={{flex:0.2}}>이름 </Text>
          <TextInput
            placeholder="이름 입력"
            style={styles.inputBox}
            value={name}
            onChangeText={name => {
              setName(name);
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={{flex:0.2}}>ID </Text>
          <TextInput
            placeholder="ID 입력"
            style={styles.inputBox}
            value={id}
            onChangeText={id => {
              setId(id);
            }}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={{flex:0.2}}>PW </Text>
          <TextInput
            placeholder="PW 입력"
            style={styles.inputBox}
            value={pw}
            onChangeText={pw => {
              setPw(pw);
            }}
          />
        </View>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inPutContainer: {
    paddingTop: 100,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputBox: {
    backgroundColor: '#F8F8FF',
    borderWidth: 1,
    width: '55%',
    height: 35,
    marginLeft:20
  },
  ButtonContainer: {
    flex: 0.3,

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonStyle: {
    backgroundColor: '#F8F8FF',
    width: '55%',
    height: 35,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 20,
    
  },
});
