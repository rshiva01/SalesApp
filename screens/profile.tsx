import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, IconButton, List } from 'react-native-paper'

type BackNBell = {
    text: string
}
const BackNBell = (props:BackNBell) => {
    return(
        <View style = {styles.container1} >
            <View style = {styles.backArrowContainer} >
                <IconButton
                    icon={require('../assets/backArrowButton.png')}
                    size={20}
                />
                <Text style = {styles.textStyle} >{props.text}</Text>
            </View>
            <View>
                <IconButton
                    icon={require('../assets/bellIcon.png')}
                />
            </View>
        </View>
    )
}
export {BackNBell}

const AvatarEdit = () => {
    return(
        <View style = {styles.avatarEditMainContainer} >
            <View style = {{flexDirection: 'row'}} >
                <Avatar.Image source={require('../assets/avatarProfilePhoto.png')} size={31} style = {{alignSelf: 'center'}} />
                <View style = {{paddingLeft:7}} >
                    <Text style = {styles.avatarText} >Nick!</Text>
                    <Text style = {styles.avatarText} >nickj44@ybl.com</Text>
                </View>
            </View>
            <IconButton icon={require('../assets/editIcon.png')} size={13}/>
        </View>
    )
}
export {AvatarEdit}

const Profile = () => {
    const [expanded, setExpanded] = React.useState(true)
    const handlePress = () => setExpanded(!expanded)
    return(
        <View style = {styles.mainContainer} >
            <BackNBell text='My Profile' />
            <View style = {styles.container2} >
                <AvatarEdit/>
                <List.Section title = 'Items'>
                    <List.Accordion
                        title = 'Settings'
                        left={props => <List.Icon {...props} icon={require('../assets/settingIcon.png')}/>}>
                        <List.Item title = 'Reset Password'/>
                        <List.Item title = 'Notifications'/>
                        <List.Item title = 'App Lock'/>
                    </List.Accordion>
                </List.Section>
            </View>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:'#01232D',
        paddingTop: 20,
    },
    container1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    backArrowContainer:{
        flexDirection:'row',
    },
    textStyle:{
        alignSelf:'center',
        color: '#F6B100',
        fontSize: 14,
    },
    container2:{
        margin:10,
        borderRadius: 15,
        backgroundColor:'#012E3C'
    },
    avatarEditMainContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 20
    },
    avatarText:{
        color:'#F6B100',
        fontSize: 14,
        padding: 3
    },
})