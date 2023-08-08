import React, { useCallback, useMemo, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, IconButton, Searchbar } from "react-native-paper";
import { UnsecuredTextBox } from "./login";

const CreateSales = ({navigation}:any) => {
    return(
        <View style = {styles.mainContainer}>
            <View style = {{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
                <View style = {{flexDirection:'row', alignItems:'center'}}>
                    <IconButton icon={require('../assets/backArrowButton.png')} iconColor="#F6B100" size={19}/>
                    <Text style = {{color:'#F6B100'}}>Create Sales</Text>
                </View>
                <Button labelStyle={{color:'#F6B100', fontSize:14}}>Cancel</Button>
            </View>
            <View>
                <View style = {{justifyContent:'space-evenly', flexDirection:'row', alignItems:'center', marginTop:30}} >
                    <View style = {{alignItems:'center'}} >
                        <Image source={require('../assets/tickIcon.png')} resizeMode="contain"/>
                        <Text style = {styles.yellowText}>Customer Detail</Text>
                    </View>
                    <View style = {{alignItems:'center'}} >
                        <Image source={require('../assets/ellipse.png')} resizeMode="contain"/>
                        <Text style = {styles.whiteText}>Add Product & Review</Text>
                    </View>
                    <View style = {{alignItems:'center'}} >
                        <Image source={require('../assets/ellipse.png')} resizeMode="contain" style = {{height:13, width:13}}/>
                        <Text style = {styles.whiteText} >Add Payment</Text>
                    </View>
                </View>
            </View>
            <Text style = {{color:'#FFFFFF', fontWeight:'bold', fontSize:14, marginTop:40, marginLeft:20}} >Customer Details</Text>
            <UnsecuredTextBox placeholder="Enter Name" />
            <UnsecuredTextBox placeholder="Enter Delivery Date"/>
            <UnsecuredTextBox placeholder="Order ID"/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.updateButton} onPress={()=>{navigation.navigate('AddProducts')}}>
                    <Text style={styles.update}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateSales

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#01232D',
        paddingTop:20,
        paddingHorizontal:20
    },
    yellowText:{
        color:'#F6B100',
        fontSize:12,
        paddingTop:5
    },
    whiteText:{
        color:'#FFFFFF',
        fontSize:12,
        paddingTop:15
    },
    buttonContainer:{
        flex:1,
        justifyContent:'flex-end'
    },
    updateButton:{
        flex:1,
        alignSelf: 'flex-end',
        maxHeight: 77,
        width: 375,
        backgroundColor: '#F6B100',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent:'center'
      },
      update:{
        color: '#01232D',
        fontSize: 18,
        fontWeight:'bold',
        textAlign:'center',
      },
})