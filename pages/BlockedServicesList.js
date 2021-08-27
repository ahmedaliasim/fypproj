import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity} from 'react-native';
// import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';
import baseURL from "../constants/baseURL"; 
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Card, CardTitle,CardImage } from 'react-native-material-cards'


const BlockedServicesList = ({navigation,route})=>{


    const [isDisabled,setIsDisabled] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch(`${baseURL }/getblockedservice`)
        .then(res=>res.json())
        .then(results=>{
    
            // setData(results)
            // setLoading(false)
          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }

    //  const alertBlock = () => {

    //     Alert.alert("blocked successfully")

    //  }

    //  const alertunBlock = () => {

    //     Alert.alert("Unblocked successfully")

    //  }

    const deleteEmploye = (_id)=>{
        fetch(`${baseURL }/unblockservice`,{
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
         Alert.alert(`${deletedEmp.title} Service Unblocked`)
            navigation.navigate("Dashboard")
        })
        .catch(err=>{
         Alert.alert("someting went wrong")
        })
    }
    
     useEffect(()=>{
          fetchData() 
     },[])

    
    //  const starfunc = () => {

    //     if(isDisabled){

    //         setIsDisabled(false)
    //     }
    //     else{

    //         setIsDisabled(true)
    //     }

    //  }
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
                        title=  {item.vendorName}
                        subtitle={item.title}
                        subtitleStyle={styles.text1}
                />
                {/* <View style= {styles.fab1}>
            <TouchableOpacity  onPress={()=>navigation.navigate("BlockedEmp", {item})}>
                <Image source={require('../Images/Block-512.png')} style= {styles.fab} />
                </TouchableOpacity>
                </View> 
                 <View style= {styles.fab1}>
            <TouchableOpacity onPress = {alertunBlock}>
                <Image source={require('../Images/Block-512off.png')} style= {styles.fab} />
                </TouchableOpacity>
                </View>  */}
               

{/* 
                <FAB   onPress={() => deleteEmploye()}
                    style={styles.fab}
                    small={false}
                    icon= "delete"
                    theme={{colors:{accent:"#006aff"}}}
        
                /> */}
                 
                 {/* <TouchableOpacity onPress = {starfunc}>

                <AntDesign name={ isDisabled ? "staro" : "star" } size={24} color="black" />
                </TouchableOpacity> */}
      
            
           </Card>
          )
    })
    
    
   return(
       <View style={{flex:1}}>
             
            <ImageBackground  source={require('../Images/www.jpg')} style={styles.menuIcon5}
              alt="image base">
                  <ImageBackground  source={require('../Images/bbb.jpg')} style={styles.menuIcon6}
              alt="image base">
       <ImageBackground  source={require('../Images/red.jpg')} style={styles.menuIcon3}
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
})

export default BlockedServicesList;