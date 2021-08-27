import React from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card} from 'react-native-paper'
import { MaterialIcons,Entypo} from '@expo/vector-icons'
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';


const ServiceProfile = (props)=>{

   const {_id,vendorId,vendorName,availibility,title,description,price,image,category,hearts,numComments,isFeatured,dateCreated} = props.route.params.item
  //console.log(route.params)
  const blocked= async ()=>{
    fetch(`${baseURL }/blockclient`,{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      userName,
       email,
       phone,
       cnic,
       firstName,
       lastName
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             navigation.navigate("AdminDashboard")
           } catch (e) {
             console.log("error hai",e)
           }
    }).catch(err=>{
     Alert.alert("Empty Field")
 })
 }
   const deleteEmploye = ()=>{
       fetch("http://192.168.0.105:3000/delete",{
           method:"post",
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               id:_id
           })
       })
       .then(res=>res.json())
       .then(deletedEmp=>{
           Alert.alert(`${deletedEmp.name} deleted`)
           props.navigation.navigate("CurrentClient")
       })
       .catch(err=>{
        Alert.alert("someting went wrong")
       })
   }
   const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL(`tel:${phone}`)
        }else{
           Linking.openURL(`telprompt:${phone}`)
        }
   }
  return (
    <View style={styles.root}>
    <ImageBackground  source={require('../Images/back.png')} style={styles.menuIcon5}
              alt="image base">  
     <View style={{alignItems:"center"}}>
         <Image
        style={{width:140,height:140,borderRadius:140/2,marginTop:50}}
        source={{uri:image}}
        /> 
     </View> 
     <View style={{alignItems:"center",margin:15}}>
         <Title>Title: {title}</Title>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Vendor: {vendorName}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Description: {description}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Availaibility: {availibility}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Price: {price}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Category: {category}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Number of Hearts: {hearts}</Text>
         
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Text>Number of Comment: {numComments}</Text>
         
     </View>
     </ImageBackground>

     {/* <Card style={styles.mycard} onPress={()=>{
         Linking.openURL(`mailto:${email}`)
     }}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.mytext}>{email}</Text>
        </View>
     </Card>
     <Card style={styles.mycard} onPress={()=>openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.mytext}>{phone}</Text>
        </View>
     </Card> */}
     {/* <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.mytext}>{salary}</Text>
        </View>
     </Card> */}
     {/* <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
        <Button
         style={styles.inputStyleButton} 
         title = "Edit"
          onPress={() => {
             props.navigation.navigate("CurrentAdmin",
             {_id,name,email,password,phone,picture}
             ) 
          }}>
              </Button>
         </View> */}
         
         <View style={{flexDirection:"row",justifyContent:"space-around",padding:20,}}>  
        
        {/* <Button 
         icon="delete"
         mode="contained"
         theme={theme}
         title = "Delete Service"
          onPress={() => deleteEmploye()}>
            
        </Button>  */}

        {/* <Button 
         style={styles.inputStyleButton} 
         title = "Block Service"
         onPress={() => {
          props.navigation.navigate("BlockedServiceConfirm",
          {vendorName,availibility,title,description,price,image,category,hearts,numComments}
          ) 
       }}> */}
            
            {/* </Button> */}
           <TouchableOpacity  onPress={() => deleteEmploye()}>
            <Image
              style={styles.menuIcon3}
              source={require('../Images/delete.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity   
          onPress={() => {
            props.navigation.navigate("BlockedServiceConfirm",
            {vendorName,availibility,title,description,price,image,category,hearts,numComments}
            ) 
       }}>
            <Image
              style={styles.menuIcon4}
              source={require('../Images/Block-512.png')}
            />
          </TouchableOpacity>
       
     </View>
    

  </View>
)
}

const theme = {
colors:{
    primary:"#006aff"
}
}


const styles = StyleSheet.create({
root:{
    flex:1
},
mycard:{
    margin:3
},
cardContent:{
flexDirection:"row",
padding:8
},
mytext:{
fontSize:18,
marginTop:3,
marginLeft:5
},

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
        justifyContent:"space-around",
        padding:10
    },
    menuIcon1: {
        marginTop:10,
        marginBottom: 10,
        width: 200,
        height: 150,
        alignSelf: 'center',
      },
      menuIcon3: {
        marginTop:5,
        marginBottom: 10,
        width: 60,
        height: 60,
       marginRight:70,
       marginLeft: 30
      },
      menuIcon4: {
        marginTop:5,
        marginBottom: 10,
        width: 60,
        height: 60,
       marginRight:50,
       marginLeft: 70
      },
      menuIcon5: {
        marginBottom: 13,
        width: 410,
        height: 700,
        alignSelf: 'center',
        backgroundColor:"white",
        borderBottomEndRadius:200 / 2,
        borderBottomLeftRadius:200/2,
        overflow: "hidden",
        
      },
  })
  
export default ServiceProfile