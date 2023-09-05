import {View,Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import {React,useState,useEffect} from 'react'
import { useLog } from '../../hooks/useLog'
export default ({navigation}) => {
    const {
        onPressLogIn,
        checkServerStatus
    } = useLog()
    const [id,setId] =useState('')
    const [pw,setPw] =useState('')
    useEffect(()=>{
        console.log(id)
    },[id])
    return(
        <View style={{flex:1,alignItems:'center',backgroundColor:"#1E90FF"}}>
            <View style={styles.inPutContainer}>
                <TextInput
                    placeholder='ID 입력' 
                    style={styles.inputBox}
                    value={id}
                    onChangeText={(id)=>{setId(id)}}
                    />
                <TextInput
                    placeholder='PW 입력'
                    style={styles.inputBox}
                    value={pw}
                    onChangeText={(pw)=>{setPw(pw)}}
                    />
            </View>
            
            <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.ButtonStyle}
                onPress={()=>{checkServerStatus()}}
            >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonStyle}
                onPress={()=>{navigation.navigate('SignUp')}}
            >
                <Text style={styles.buttonText}>
                    회원가입
                </Text>
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    inPutContainer:{
        paddingTop:100,
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        
    },
    inputBox:{
        backgroundColor:"#F8F8FF",
        borderWidth:1,
        width:'55%',
        height:35,marginBottom:20
    }, 
    ButtonContainer:{
        flex:0.3,
    
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    ButtonStyle:{
        backgroundColor:"#F8F8FF",
        width:'55%',
        height:35,
        borderRadius:35/2,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'
    }
})