import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const FAQ = () => {
    return (
      <View style = {styles.mainContainer} >
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}} >
            <View style = {{flexDirection:'row'}} >
                <IconButton icon={require('../assets/backArrowButton.png')} iconColor='#F6B100' size={20}/>
                <Text style = {{color:'#F6B100', fontSize:14, alignSelf:'center'}} >FAQ</Text>
            </View>
            <View>
                <IconButton icon={require('../assets/bellIcon.png')} iconColor='#F6B100' />
            </View>
        </View>
      </View>
    )
  }

export default FAQ

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop:20,
        paddingHorizontal:10,
        backgroundColor:'#01232D'
    }
})