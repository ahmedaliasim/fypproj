import React from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,Alert,TouchableOpacity} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {Title,Card} from 'react-native-paper'
import { MaterialIcons,Entypo} from '@expo/vector-icons'

const Profile = (props)=>{

   const {_id,name,email,password,phone,picture} = props.route.params.item
  //console.log(route.params)
  
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
           Alert.alert(`${deletedEmp.name} Fired`)
           props.navigation.navigate("CurrentAdmin")
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
   
  
    <View style={{
      flex:1,
      backgroundColor:"#FFF",
      
  }}>
   
      <View style={{
          flexDirection:"row",
          width:"100%",
          height:"90%"
      }}>
          <View style={{width:"10%"}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Image
                      source={{uri:picture}}
                      style={{width:200,height:200, borderBottomLeftRadius:40,
                        borderBottomRightRadius:40,marginTop:50,marginLeft:120,
                      borderTopLeftRadius:40,borderTopRightRadius:40}}
                  />
              </TouchableOpacity>   
           
                
          </View>
          <View style={{width:"90%",marginTop:400}}>
          <Card style={styles.mycard} onPress={()=>{
         Linking.openURL(`mailto:${email}`)
     }}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="green" />
          <Text style={styles.mytext}>{email}</Text>
        </View>
     </Card>
     <Card style={styles.mycard} onPress={()=>openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="green" />
          <Text style={styles.mytext}>{phone}</Text>
        </View>

     </Card>
          </View>
          
      </View>
      
    
                  <View style={{
                      flexDirection:"row",
                      marginTop:-80,
                      marginHorizontal:20,
                      alignItems:"center"
                  }}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          color:"#62636a"
                      }}>
                         {name}
                      </Text>
                      <TouchableOpacity  onPress={() => deleteEmploye()}>
            <Image
              style={styles.menuIcon3}
              source={require('../Images/delete.png')}
            />
          </TouchableOpacity>
                  </View>

                  <Text style={{
                      paddingHorizontal:20,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3,
                      fontSize:20
                  }}>
                      Pakistan
                  </Text>

                  <View style={{
                      flexDirection:"row",
                      width:"100%"
                  }}>
                    
                      <View style={{
                          width:"50%",
                          backgroundColor:"#4f8727",
                          height:70,
                          marginTop:20,
                          borderTopRightRadius:25,
                          alignItems:"center",
                          justifyContent:"center"
                      }}>
                         <TouchableOpacity  onPress={() => {
             props.navigation.navigate("UpdateProfile",
             {_id,name,email,password,phone,picture}
             ) 
          }}>
                          <Text style={{
                              color:"#FFF",
                              fontSize:17
                          }}>Update</Text>

</TouchableOpacity>
                      </View>

                      <View style={{
                          width:"50%",
                          alignItems:"center",
                          justifyContent:"center",
                          marginTop:20
                      }}>
                          <Text style={{
                              color:"#62636a",
                              fontWeight:"bold",
                              fontSize:17
                          }}>Description</Text>
                      </View>
                  </View>
                  
  </View>
  )
}
  
  const styles = StyleSheet.create({
    root:{
        flex:1,
        
    },
    mycard:{
        margin:9,
         backgroundColor:"#fff" ,
    },
    cardContent:{
    flexDirection:"row",
    padding:8,
    
    },
    mytext:{
    fontSize:20,
    marginTop:3,
    marginLeft:5,
    fontWeight:'bold'
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
          menuIcon2: {
            marginTop:5,
            marginBottom: 10,
            width: 60,
            height: 60,
           marginRight:10,
           marginLeft: 40
          },
          menuIcon3: {

            width: 40,
            height: 40,
           marginRight:90,
           marginLeft: 150
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
            width: 430,
            height: 630,
            alignSelf: 'center',
            backgroundColor:"white",
            borderBottomEndRadius:200 / 2,
            borderBottomLeftRadius:200/2,
            overflow: "hidden",
            
          },
          menuIcon6: {
            
            width: 470,
            height: 700,
            alignSelf: 'center',
            backgroundColor:"#FAF9F6",
            borderBottomEndRadius:270 / 2,
            borderBottomLeftRadius:270/2,
            overflow: "hidden",
        
            
          },
      })

export default Profile