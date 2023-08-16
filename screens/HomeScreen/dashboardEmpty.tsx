import * as React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Avatar, BottomNavigation, Divider, FAB, IconButton } from 'react-native-paper'
import BottomTab from '../../navigation/bottomTab'
import { NavigationContainer } from '@react-navigation/native'

const AvatarNBell = ({navigation}:any) => {
    return(
        <View style={styles.container3}>
            <TouchableOpacity>
                <View style = {styles.avatarContainer}>
                    <Avatar.Image size={31} style={styles.avatar} source={require('../../assets/avatarProfilePhoto.png')}/>
                    <Text style = {styles.avatarText} >Welcome back, Nick!</Text>
                </View>
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <IconButton icon={require('../../assets/bellIcon.png')} onPress={()=>{navigation.navigate('Notifications')}}></IconButton>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export {AvatarNBell}

const SalesSummary = () => {
    var date = new Date().getDate()
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    return(
        <View style = {styles.salesSummaryContainer}>
            <Text style = {styles.salesSummaryText}>Sales Summary</Text>
            <View>
                <Text style = {styles.dateText}>{date} {month} {year}</Text>
                <Text style = {styles.dateText}> 10 Entries</Text>
            </View>
        </View>
    )
}
export {SalesSummary}

type SalesProps = {
    tzs: string
    productSold: string
}

const SalesFigBox = ({navigation}:any ,props: SalesProps) => {
    return(
        <View style = {styles.salesFigContainer}>
            <View style = {styles.container4} >
                <View>
                    <Text style = {{color:'#FFFFFF',fontSize:14}}>Total Sales</Text>
                    <View style = {{flex:1, flexDirection:'row',paddingTop:5}}>
                        <Image source={require('../../assets/salesGraph.png')} resizeMode='contain'/>
                        <Text style = {{color:'#F6B100', fontSize:18,paddingVertical:2,paddingHorizontal:5}} >TZS {props.tzs}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {{color:'#FFFFFF',fontSize:14}} >Product Sold</Text>
                    <View style = {{flex:1, flexDirection:'row',paddingTop:5}}>
                        <Image source={require('../../assets/productIcon.png')} resizeMode='contain' />
                        <Text style = {{color:'#F6B100', fontSize:18,paddingVertical:2,paddingHorizontal:5}} >{props.productSold}</Text>
                    </View>
                </View>
            </View>
            <Divider theme={{colors:{primary:'#F6B100'}}}/>
            <View style = {{flex:1, flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity style = {{flexDirection:'row', justifyContent:'center'}} onPress={()=>{navigation.navigate('SalesDetails')}}>
                    <Text style = {{color:'#D5EAF1',paddingTop:10}} >View Report</Text>
                    <IconButton icon={require('../../assets/arrowIcon.png')} style = {{paddingBottom:10}} ></IconButton>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export {SalesFigBox}

const DashboardEmpty = () => {
    return(
        <View style = {styles.container1}>
            <View style = {styles.container2}>
                <AvatarNBell/>
                <SalesSummary/>
                <SalesFigBox tzs='0.0' productSold='0'/>
                <View>
                    <Image source={require('../../assets/emptyPageImage.png')} resizeMode='contain' style = {styles.image} />
                    <Text style = {{color: '#FFFFFF', alignSelf:'center', fontSize:14,paddingVertical:10}} >Looks like you’re yet to add your first sale!</Text>
                    <Text style = {{color: '#FFFFFF',alignSelf:'center', textAlign:'center',fontSize:12,paddingVertical:20}} >Add your sales records to track {'\n'}transactions with ease</Text>
                </View>
                <TouchableOpacity style = {styles.createSalesButton}>
                    <Text style = {styles.createSalesText} >Create Sales</Text>
                </TouchableOpacity>
                <FAB style={styles.fab} label='New Customer' />
            </View>
        </View>
    )
}

export default DashboardEmpty

const styles =  StyleSheet.create ({
    container1: {
        flex:1,
        backgroundColor: '#01232D',
        paddingTop: 20,
        alignContent:'flex-start'
    },
    container2:{
        flex:1,
        justifyContent:'flex-start',
        //backgroundColor:'#FFFFFF'
    },
    container3:{
        flexDirection:'row',
        justifyContent:'space-between'
        //backgroundColor:'#FFFFFF',
    },
    avatar:{
        borderWidth: 2,
        borderColor: '#F6B100',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText:{
        color: '#F6B100',
        alignItems: 'center',
        paddingLeft:10,
        paddingVertical: 5,
        alignSelf:'flex-start'
    },
    avatarContainer:{
        flex:1,
        flexDirection:'row',
        padding:13,
        //backgroundColor:'#FFFFFF'
    },
    salesSummaryContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingHorizontal:15,
        //backgroundColor:'#FFFFFF'
    },
    salesSummaryText:{
        color: '#D5EAF1',
        fontSize:14,
        fontWeight:'500',
    },
    dateText:{
        color:'#D5EAF1',
        fontStyle:'italic',
        fontSize:10
    },
    salesFigContainer: {
        borderWidth:1,
        borderColor:'#F6B100',
        height: 125,
        width:341,
        alignSelf:'center',
        borderRadius: 15,
        marginVertical:13
    },
    container4:{
        flex:1,
        flexDirection:'row',
        marginVertical: 20,
        marginHorizontal:30,
        justifyContent:'space-between',
    },
    image:{
        alignSelf:'center',
        marginVertical:20,
    },
    createSalesButton:{
        alignSelf:'center',
        height:44,
        width: 173,
        backgroundColor: '#F6B100',
        borderRadius: 5,
        justifyContent: 'center'
    },
    createSalesText:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'bold',
    },
    fab:{
        backgroundColor:'#FFE296',
        alignSelf:'flex-end',
        borderRadius:18,
        height:38,
        marginTop: 20,
    }
})