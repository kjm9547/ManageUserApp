import {AsyncStorageStatic} from '@react-native-async-storage/async-storage'
import axios from 'axios'

export const useLog = ()=>{
    const onPressLogIn = async (id,pw)=>{
        
        await axios
        .get("http://localhost:8080/")
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력
        })
        .catch((error)=>{
            console.log(error);				//오류발생시 실행
    })
    }
    const checkServerStatus = async ()=>{
        await axios
        .get("/hello")
        .then((response) => {
            console.log(response.data);		//정상 통신 후 응답된 메시지 출력
        })
        .catch((error)=>{
            console.log(error);				//오류발생시 실행
    })
    }
    

    return{
        onPressLogIn,
        checkServerStatus
    }
}

