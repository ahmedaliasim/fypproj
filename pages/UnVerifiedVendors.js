import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity} from 'react-native';
// import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 
import color from "../constants/color";
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Card, CardTitle,CardImage } from 'react-native-material-cards'

const UnVerifiedVendors = ({navigation,route})=>{


    const [isDisabled,setIsDisabled] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })
    

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch(`${baseURL }/unverifyvendor`)
        .then(res=>res.json())
        .then(results=>{
    
            // setData(results)
            // setLoading(false)
          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong",err.message)
        })
     }

     const alertBlock = () => {

        Alert.alert("blocked successfully")

     }

     const alertunBlock = () => {

        Alert.alert("Unblocked successfully")

     }

     const deleteEmploye = (_id)=>{
        fetch(`${baseURL }/verifyvendor`,{
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
         Alert.alert(`${deletedEmp.userName} Verified`)
            navigation.navigate("CurrentVendors")
        })
        .catch(err=>{
         Alert.alert("someting went wrong")
        })
    }
    
     useEffect(()=>{
          fetchData() 
     },[])

    
     const starfunc = () => {

        if(isDisabled){

            setIsDisabled(false)
        }
        else{

            setIsDisabled(true)
        }

     }
    const renderList = ((item)=>{
          return(
              

            

            <Card style={styles.cardView}
            
            onPress={()=>deleteEmploye(item._id)}
           //onPress = {() => console.log("item data", item)}
            >
              
              <Image 
                style={{width:140,height:140,borderRadius:140/2,marginTop:50, alignSelf:"center"}}
                resizeMode= 'cover'
                source={{uri:item.image}}
                
                />
                  <CardTitle 
                  
                        titleStyle={styles.text}
                        title=  {item.userName}
                        subtitle={item.email}
                        subtitleStyle={styles.text1}
                />
            
           </Card>
          )
    })
    
    
   return(

    

       <View style={{flex:1}}>
              
              <ImageBackground  source={require('../Images/www.jpg')} style={styles.menuIcon5}
              alt="image base">
                  <ImageBackground  source={require('../Images/bbb.jpg')} style={styles.menuIcon6}
              alt="image base">
       <ImageBackground  source={require('../Images/yellow.jpg')} style={styles.menuIcon3}
              alt="image base">
        <FlatList
              data={data}
              renderItem={({item})=>{
                return renderList(item)
              }}
              horizontal
              pagingEnabled
              keyExtractor={item=>item._id}
              onRefresh={()=>fetchData()}
              refreshing={loading}
              />
        </ImageBackground>

        </ImageBackground>

        </ImageBackground>
       </View>
     
   ) 
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        borderRadius: 45,
    },
    cardView:{
        width:"100%",
        height:"100%",
        backgroundColor: 'transparent',
        opacity: 1,  
        aspectRatio:0.78
    },
    menuIcon3: {
       
      width: 470,
      height: 600,
      alignSelf: 'center',
      backgroundColor:"#FAF9F6",
      borderBottomEndRadius:270 / 2,
      borderBottomLeftRadius:270/2,
      overflow: "hidden",
  
      
    },
    menuIcon5: {
      
       width: 470,
       height: 810,
       alignSelf: 'center',
       backgroundColor:"#FAF9F6",
       borderBottomEndRadius:270 / 2,
       borderBottomLeftRadius:270/2,
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
    text:{
        fontSize:27,
        fontWeight:"bold",
        paddingTop:10,
        alignSelf:"center"
    },
    text1:{
        fontSize:20,
        alignSelf:"center"
    },
    fab: {
     
        marginTop:10,
        marginBottom: 10,
        width: 50,
        height: 50,
        
        marginLeft: 30
        
      },
      fab1: {
     
        justifyContent: "center",
        alignSelf: 'center',
        
        
      },
      menuIcon1: {  
        width: 10,
        height: 20,
        alignSelf: 'center',
        backgroundColor:"white"
      },
      menuIcon3: {
        
        width: 470,
        height: 600,
        alignSelf: 'center',
        backgroundColor:"#FAF9F6",
        borderBottomEndRadius:270 / 2,
        borderBottomLeftRadius:270/2,
        overflow: "hidden",
    
        
      },
     
})

export default UnVerifiedVendors;