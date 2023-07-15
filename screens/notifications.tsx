import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BackNBell } from './profile'

const NotificationContent = () => {
    return(
        <View style = {styles.container} >
            <View style = {styles.circle} ></View>
            <Text style = {{color:'#FFFFFF', margin: 10}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </View>
    )
}
export {NotificationContent}

const Notifications = () => {
    return(
        <View style = {styles.mainContainer} >
            <BackNBell text='Notifications' />
            <NotificationContent/>
            <NotificationContent/>
            <NotificationContent/>
            <NotificationContent/>
        </View>
    )
}
export default Notifications

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#01232D',
        paddingTop: 20,
    },
    container:{
        backgroundColor: '#012E3C',
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection:'row'
    },
    circle:{
        backgroundColor:'#2BC871',
        height: 10,
        width: 10,
        borderRadius: 50,
        alignSelf:'center',
        marginLeft:5
    }
})