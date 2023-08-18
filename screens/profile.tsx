import React, { Component } from 'react'
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
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
                    iconColor='#F6B100'
                />
                <Text style = {styles.textStyle} >{props.text}</Text>
            </View>
            <View>
                <IconButton
                    icon={require('../assets/bellIcon.png')}
                    iconColor='#F6B100'
                    size={20}
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
            <IconButton icon={require('../assets/editIcon.png')} size={13} iconColor='#AAD2DF'/>
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
            </View>
            <ScrollView>
            <View style={styles.listContainer} >
                <List.Section title = ''>
                        <List.Accordion
                            title = 'Settings'
                            left={props => <List.Icon {...props} icon={require('../assets/settingIcon.png')} color='#2A677A'/>}
                            style = {styles.listStyle}
                            titleStyle = {styles.listTitleStyle}
                            >
                            <List.Item title = 'Reset Password' titleStyle = {styles.listItemTitleStyle}/>
                            <List.Item title = 'Notifications' titleStyle = {styles.listItemTitleStyle}/>
                            <List.Item title = 'App Lock' titleStyle = {styles.listItemTitleStyle}/>
                        </List.Accordion>
                        <List.Accordion
                            title = 'Help & Support'
                            left={props => <List.Icon {...props} icon={require('../assets/help&supportIcon.png')} color='#2A677A'/>}
                            style = {styles.listStyle}
                            titleStyle = {styles.listTitleStyle}
                            >
                            <List.Item title = 'FAQ' titleStyle = {styles.listItemTitleStyle}/>
                            <List.Item title = 'Call us' titleStyle = {styles.listItemTitleStyle} onPress={()=>{Linking.openURL('tel:+2558900076786')}} />
                            <List.Item title = 'Chat with us' titleStyle = {styles.listItemTitleStyle}/>
                        </List.Accordion>
                        <List.Accordion
                            title = 'About Us'
                            left={props => <List.Icon {...props} icon={require('../assets/aboutUsIcon.png')} color='#2A677A'/>}
                            style = {styles.listStyle}
                            titleStyle = {styles.listTitleStyle}
                            >
                        </List.Accordion>
                        <List.Accordion
                            title = 'Terms & Condition'
                            left={props => <List.Icon {...props} icon={require('../assets/terms&ConditionIcon.png')} color='#2A677A'/>}
                            style = {styles.listStyle}
                            titleStyle = {styles.listTitleStyle}
                            >
                        </List.Accordion>
                        <List.Accordion
                            title = 'Logout'
                            left={props => <List.Icon {...props} icon={require('../assets/logoutIcon.png')} color='#2A677A'/>}
                            style = {styles.listStyle}
                            titleStyle = {styles.listTitleStyle}
                            >
                        </List.Accordion>
                    </List.Section>
            </View>
            </ScrollView>
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
    listContainer:{
      backgroundColor: '#012E3C',
      borderRadius: 15,
      marginHorizontal: 10,
    },
    listStyle:{
        backgroundColor:'#012E3C',
    },
    listTitleStyle:{
        color:'#F6B100',
        fontSize:14
    },
    listItemTitleStyle:{
        color: '#FFE296',
        fontSize:14
    }
})