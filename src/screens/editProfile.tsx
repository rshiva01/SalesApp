import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, IconButton, TextInput} from 'react-native-paper';
import AvatarImage from 'react-native-paper/lib/typescript/src/components/Avatar/AvatarImage';

const EditProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            icon={require('../assets/backArrowButton.png')}
            iconColor="#F6B100"
            size={19}
          />
          <Text style={{color: '#F6B100', fontSize: 14}}>Edit Profile</Text>
        </View>
        <View>
          <IconButton
            icon={require('../assets/bellIcon.png')}
            iconColor="#F6B100"
            size={21}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center', marginHorizontal: 10}}>
          <Avatar.Image
            source={require('../assets/avatarProfilePhoto.png')}
            size={73}
          />
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#D5EAF1'}}>Edit Profile</Text>
              <IconButton
                icon={require('../assets/editIcon.png')}
                size={13}
                iconColor="#D5EAF1"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#D5EAF1'}}>
            TZS 30,00,000 billing till date
          </Text>
          <Text style={{color: '#D5EAF1', fontSize: 12}}>Nick Joseph</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <TextInput
          mode="outlined"
          label={'Nick Joseph'}
          theme={{colors: {primary: '#78ADBE'}}}
          style={{backgroundColor: '#012E3C', color: '#012E3C'}}
          disabled
          outlineStyle={{borderRadius: 10}}
        />
        <TextInput
          mode="outlined"
          label={'Nick Joseph'}
          theme={{colors: {primary: '#78ADBE'}}}
          style={{
            backgroundColor: '#012E3C',
            color: '#012E3C',
            marginVertical: 10,
          }}
          outlineStyle={{borderRadius: 10}}
        />
        <TextInput
          mode="outlined"
          label={'nickj44@ybl.com'}
          theme={{colors: {primary: '#78ADBE'}}}
          style={{backgroundColor: '#012E3C', color: '#012E3C'}}
          disabled
          outlineStyle={{borderRadius: 10}}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
  },
});
