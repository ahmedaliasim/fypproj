import React,{useState} from 'react';
import { TextInput} from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons';
import { useDispatch } from 'react-redux';
import baseURL from "../constants/baseURL";
// import ImagePicker from 'react-native-image-crop-picker';

//const SignUp = (props) => {

  const AddCategory  = ({navigation,route})=>{
    const getDetails = (type)=>{
       if(route.params){
          switch(type){
              case "title":
                  return route.params.title
              case "picture":
                  return  route.params.picture
             
          }
       }
       return ""
    }
  const dispatch = useDispatch();


  const [picture,setPicture] = useState(getDetails("picture"))

  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  const [title,setTitle] = useState(getDetails("title"))

  const sendCred= async ()=>{
     fetch(`${baseURL}/addcategory`,{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        title,
        picture
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              await AsyncStorage.setItem('token',data.token)
              await AsyncStorage.setItem('category', JSON.stringify(data.category));
              try {
                var employee = await AsyncStorage.getItem('category');
                if (employee !== null){
                  employee = JSON.parse(employee);
                  const profile = {
                    employeeName: category.title,
                    profileImage: category.picture
                  };
                  dispatch({type: "STORE_EMPLOYEE_DATA", payload: profile});
                }
              } catch (e) {
                  console.log("Error: "+e);
              }
              navigation.navigate("DashboardScreen")
            } catch (e) {
              console.log("error hai",e)
            }
     }).catch(err=>{
       console.log(err)
      Alert.alert("Empty Field")
  })
  }
  
  const pickFromGallery = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    if(granted){
         let data =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
          if(!data.cancelled){
              let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}` 
                
            }
              handleUpload(newfile)
          }
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }
 const pickFromCamera = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
         let data =  await ImagePicker.launchCameraAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
        if(!data.cancelled){
            let newfile = { 
              uri:data.uri,
              type:`test/${data.uri.split(".")[1]}`,
              name:`test.${data.uri.split(".")[1]}` 

          }
            handleUpload(newfile)
        }
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }


 const handleUpload = (image)=>{
      const data = new FormData()
      data.append('file',image)
      data.append('upload_preset','rozgaarApp')
      data.append("cloud_name","ahmed123")

      fetch("https://api.cloudinary.com/v1_1/ahmed123/image/upload",{
          method:"post",
          body:data
      }).then(res=>res.json()).
      then(data=>{
          setPicture(data.url)
          setModal(false)
      }).catch(err=>{
          Alert.alert("error while uploading")
      })
      
 }

 
  return (
  
   <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
     <ScrollView>
     <Image
              style={styles.menuIcon1}
              source={require('../Images/rozgaar.png')}
            />

      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >Add Category</Text>
       <TextInput
                label='Title'
                style={styles.inputStyle}
                value={title}
                onFocus={()=>setenableShift(false)}  
                theme={{colors:{primary:"green"}}}          
                mode="outlined"
                onChangeText={text => setTitle(text)}
            />
    
     
     
      <Button 
             style={styles.inputStyle}
             icon={picture==""?"upload":"check"}
              mode="contained" 
              theme={theme}
              title = "Upload Picture"
              onPress={() => setModal(true)}>
                    
             </Button>
            
          
          
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button icon="camera"
                         theme={theme}
                        mode="contained"
                        title="camera"
                         onPress={() => pickFromCamera()}>
                                
                        </Button>
                        <Button 
                        icon="image-area"
                         mode="contained"
                         theme={theme}
                         title="gallery"
                          onPress={() => pickFromGallery()}>
                                
                        </Button>
                  </View>
                <Button 
                 theme={theme}
                 title="cancel"
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>

     <Button 
        mode="contained"
        style={styles.inputStyleButton}
       onPress={() => sendCred()}
       title= "Add Category">

      </Button>
      </ScrollView>
      </KeyboardAvoidingView>
   
  );
  
};
const theme = {
  colors:{
      primary:"#006aff"
  }
}

const styles=StyleSheet.create({
  root:{
     flex:1,
  },
  inputStyle:{
    marginLeft:18,marginRight:18,marginTop:18
  },
  inputStyleButton:{
    marginLeft:8,marginRight:8,marginTop:8
  },
  modalView:{
      position:"absolute",
      bottom:2,
      width:"100%",
      backgroundColor:"white"

  },
  modalButtonView:{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:20,
      width:"85%"
  },
  menuIcon1: {
      marginTop:10,
      marginBottom: 10,
      width: 200,
      height: 180,
      alignSelf: 'center',
    }
})

export default AddCategory;