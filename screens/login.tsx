import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Button, Divider, TextInput } from 'react-native-paper'

const LogoContainer = () => {
  return(
      <View style = {styles.logoContainer} >
          <Image source={require('../assets/logoNew.png')} resizeMode='contain' style = {styles.logo} ></Image>
          <View style = {{flexDirection: 'row',justifyContent:'center'}} >
              <Text style = {{color: '#F6B100', fontSize: 24, fontWeight:'bold',}} >Mauzo</Text>
              <Text style = {{color: '#FFFFFF', fontSize: 24, fontWeight:'bold',}} >Track</Text>
          </View>
          <View style = {{flexDirection: 'row-reverse'}} >
              <Text style = {{marginRight:50, color:'#FFFFFF', fontSize:10}} >by Switch</Text>
          </View>
      </View>
  )
}
export {LogoContainer}

const Dividers = () => {
  return(
    <Divider style = {styles.divider} />
  )
}
export {Dividers}


type YellowTextProps = {
  text: string
}
const YellowText = (props: YellowTextProps) => {
  return(
      <Text style = {styles.YellowText} >{props.text}</Text>    )
}
export {YellowText}


type ContentProps = {
  text: string
}
const Content = (props: ContentProps) => {
  return(
    <Text style = {styles.content} >{props.text}</Text>
  )
}
export {Content}

type TextBoxProps = {
  placeholder: string
}
const UnsecuredTextBox = (props: TextBoxProps) => {
  return(
    <TextInput
    style = {styles.textContainer}
    mode='outlined' 
    label={props.placeholder}
    secureTextEntry={false}
    outlineColor='#D5EAF1'
    textColor='#D5EAF1'
    activeOutlineColor='#D5EAF1'
    placeholderTextColor='#D5EAF1'
    />
  )
}
export {UnsecuredTextBox}

type SecuredTextBoxProps ={
  placeholder: string
}
const SecuredTextBox = (props: SecuredTextBoxProps) => {
  return(
    <TextInput
    style = {styles.passwordContainer} 
    mode='outlined' 
    label={props.placeholder} 
    secureTextEntry={true}
    outlineColor='#D5EAF1'
    textColor='#D5EAF1'
    activeOutlineColor='#D5EAF1'
    placeholderTextColor={'#D5EAF1'}
    />
  )
}
export {SecuredTextBox}

const Login = ({navigation}:any) => {
  return(
    <View style={styles.mainContainer}>
      <LogoContainer/>
      <Dividers/>
      <YellowText text='Forgot Password' />
      <Content text='Enter your register Mobile number' />
      <UnsecuredTextBox placeholder='Enter Mobile Number' />
      <SecuredTextBox placeholder='Password'/>
      <View style = {styles.container} >
        <Text style = {{color:'#FFFFFF',fontSize:14 }} >Remember me</Text>
        <Button textColor='#FFE296' onPress={()=>{navigation.navigate('ForgotPassword')}} >Forgot Password</Button>
      </View>
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.updateButton} onPress={()=>{navigation.navigate('Dashboard')}} > */}
        <TouchableOpacity style={styles.updateButton} onPress={()=>{navigation.navigate('Dashboard2')}} >
          <Text style={styles.update}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#01232D',
    paddingTop: 20,
  },
  logoContainer:{
    alignSelf:'center',
    marginTop:30
  },
  logo:{
    height: 48,
    width:220,
    margin:10
  },
  divider:{
    marginHorizontal: 60,
    marginVertical: 10,
  },
  YellowText:{
    color:'#F6B100',
    fontSize:20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 5,
  },
  content: {
    color: '#FFFFFF',
    fontSize:12,
    textAlign:'center',
    margin:5
  },
  textContainer:{
    backgroundColor:'#012E3C',
    margin: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  passwordContainer:{
    backgroundColor:'#01232D',
    margin: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
},
  container:{
    flexDirection:'row',
    justifyContent: 'space-between' ,
    alignItems:'center',
    marginHorizontal:30
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
  passwordPlaceholder:{
    backgroundColor:'#01232D',
    borderColor:'#D5EAF1',
    borderWidth: 1,
    height:58,
    width: 313,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    alignSelf: 'center',
  },
})