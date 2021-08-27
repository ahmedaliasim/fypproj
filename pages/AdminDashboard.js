import * as React from 'react';
import {
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Text,
  Image
} from 'react-native';



const AdminDashboard = ({ navigation }) => {


  return (
    <View style={{
      backgroundColor:"#FFF",
      flex:1
  }}>
   
     <View style={{
         
         height:"20%",
        
     }}>
        
         <Image
               source={require('../Images/back2.jpg')}
              style={{
                height:"100%",
                borderBottomLeftRadius:40,
                borderBottomRightRadius:40,
                paddingHorizontal:20,
                width:"100%"
              }}
         />
         <View style={{
             flexDirection:"row",
             alignItems:"center",
             
             width:"100%"
         }}>
         
             {/* <View style={{width:"50%",alignItems:"flex-end"}}>
                  <Image
                      source={require('../images/g.png')}
                      style={{height:60,width:60}}
                  />
             </View> */}
         </View>
     </View>
     
         <View style={{
             backgroundColor:"#FFF",
             paddingVertical:8,
             paddingHorizontal:20,
             marginHorizontal:20,
             borderRadius:15,
             marginTop:25,
             flexDirection:"row",
             alignItems:"center"
         }}>
             {/* <TextInput
                  placeholder="Search"
                  placeholderTextColor="#b1e5d3"
                  style={{
                      fontWeight:"bold",
                      fontSize:18,
                      width:260
                  }}
             /> */}
             {/* <Image
              source={require('../images/3.png')}
              style={{height:20,width:20}}
             /> */}
         </View>
      


         {/* <View style={{
             flexDirection:"row",
             paddingHorizontal:20,
             width:"100%",
             alignItems:"center"
         }}> */}
             {/* <View style={{width:"50%"}}>
                  <Text style={{
                      fontWeight:"bold",
                      fontSize:17,
                      color:"#585a61"
                  }}>Recommended</Text>
                  <View style={{
                      height:4,
                      backgroundColor:"#b1e5d3",
                      width:115,
                      marginTop:-5
                  }}>

                  </View>

             </View>
             <View style={{width:"50%", alignItems:"flex-end"}}>
                  <View style={{
                      backgroundColor:"#00a46c",
                      paddingHorizontal:20,
                      paddingVertical:5,
                      borderRadius:15
                  }}>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:13,
                          color:"#FFF"
                      }}>More</Text>
                  </View>
             </View>
         </View> */}

      
  
          <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{height:400}}
          >
            
              <TouchableOpacity 
                 onPress={() => navigation.navigate('CurrentAdmin')}
                  style={{
                      height:250,
                      elevation:2,
                      backgroundColor:"#FFF",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                          source={require('../Images/emp.png')}
                          style={{
                            height:160,
                            width:160,
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Employees</Text>
                    
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                 onPress={() => navigation.navigate('CurrentClient')}
                  style={{
                      height:250,
                      elevation:2,
                      backgroundColor:"#FFF",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                      source={require('../Images/currentclientsnew.png')}
                      style={{
                        height:160,
                        width:160,
                        
                    }}
            
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Clients</Text>
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
             </TouchableOpacity>

          </ScrollView>            

          <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{height:400}}
              marginBottom="20%"
          >
            
              <TouchableOpacity 
                  onPress={() => navigation.navigate('CurrentVendors')}
                  style={{
                      height:250,
                      elevation:2,
                      backgroundColor:"#FFF",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                          source={require('../Images/vendor.png')}
                          style={{
                            height:100,
                            width:160,
                            marginTop:50
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Vendors</Text>
                    
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                  onPress={() => navigation.navigate('CurrentServices')}
                  style={{
                      height:250,
                      elevation:2,
                      backgroundColor:"#FFF",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                  <Image
                      source={require('../Images/servicetools.png')}
                      style={{
                        height:150,
                        width:160,
                        
                       
                        
                    }}
                  />
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Services</Text>
                     
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  onPress={() => navigation.navigate('AddCategory')}
                  style={{
                      height:250,
                      elevation:2,
                      backgroundColor:"#FFF",
                      marginLeft:20,
                      marginTop:20,
                      borderRadius:15,
                      marginBottom:10,
                      width:160
                  }}
              >
                   <Image
                          source={require('../Images/vendor.png')}
                          style={{
                            height:100,
                            width:160,
                            marginTop:50
                            
                        }}
                  /> 
                  <View style={{
                      flexDirection:"row",
                      paddingTop:10,
                      paddingHorizontal:10
                  }}>
                      <Text style={{
                          fontWeight:"bold"
                      }}>Current Vendors</Text>
                    
                  </View>
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      color:"#b1e5d3",
                      paddingTop:3
                  }}>
                      View
                  </Text>
              </TouchableOpacity>
          </ScrollView>     
  </View>
)
}

export default AdminDashboard;
