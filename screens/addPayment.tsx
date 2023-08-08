import React, { useCallback, useMemo, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, IconButton, RadioButton, Searchbar } from "react-native-paper";
import { UnsecuredTextBox } from "./login";

const AddPayment = () => {
    const [checked, setChecked] = React.useState('first');
    return(
        <View style = {styles.mainContainer}>
            <View style = {{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}} >
                <View style = {{flexDirection:'row', alignItems:'center'}}>
                    <IconButton icon={require('../assets/backArrowButton.png')} iconColor="#F6B100" size={19}/>
                    <Text style = {{color:'#F6B100'}}>Add Payment</Text>
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
                        <Image source={require('../assets/tickIcon.png')} resizeMode="contain"/>
                        <Text style = {styles.yellowText}>Add Product & Review</Text>
                    </View>
                    <View style = {{alignItems:'center'}} >
                        <Image source={require('../assets/tickIcon.png')} resizeMode="contain"/>
                        <Text style = {styles.yellowText} >Add Payment</Text>
                    </View>
                </View>
            </View>
            <Text>Payment Mode</Text>
            <View>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                    />
                    <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    />
                    <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                    />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.updateButton} >
                    <Text style={styles.update}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPayment

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
      addMoreButton:{
        height: 32,
        width: 95,
        backgroundColor:'#D5EAF1',
        borderRadius:5,
        marginBottom:10,
        flexDirection:'row',
        alignSelf:'flex-end'
      },
      addMoreText:{
        color:'#01232D',
        fontSize:14,
      }
})