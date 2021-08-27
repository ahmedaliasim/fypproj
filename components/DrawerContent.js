import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';


export function DrawerContent(props) {
  const { employeeName, profileImage } = useSelector(state => state.profile);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
                source = {{
                  uri: profileImage
                }}
                size = {100}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Avatar.Image
               source={require('../Images/logo.png')}
                size = {150}
                style={styles.menuIcon1}
              />
              <Title style={styles.title}>{employeeName}</Title>
                <Caption style={styles.caption}>Admin</Caption> 
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
               icon={({ color, size }) => (
                 <MaterialIcons name="handyman" color={"green"} size={size} />
               )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
             <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="lock" color={"red"} size={size} />
              )}
              label="Blocked"
              onPress={() => {
                props.navigation.navigate('Blocked');
              }}
            />

          <DrawerItem
             
             icon={({ color, size }) => (
               <MaterialIcons name="support-agent" color={"orange"} size={size} />
             )}
             label="UnVerifiedVendors"
             onPress={() => {
               props.navigation.navigate('UnVerifiedVendors');
             }}
           />

          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Logout"
          onPress={async() => {
            try{
              await AsyncStorage.removeItem('token');
              await AsyncStorage.removeItem('email');
              props.navigation.replace('Login');
            } catch(e) {
              Alert.alert("Error:",e);
            }
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 26,
    marginTop: 30,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 2,
    borderTopColor: '#4f8727',
    borderTopWidth: 1,
    backgroundColor:"#4f8727"
  },
  menuIcon1: {
    width: 10,
    height: 20,
    alignSelf: 'center',
    backgroundColor:"white"
  }
});
