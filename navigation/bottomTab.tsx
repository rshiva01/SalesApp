import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import DashboardEmpty from "../screens/HomeScreen/dashboardEmpty";
import Notifications from "../screens/notifications";
import DashboardFilled from "../screens/HomeScreen/dashboardFilled";
import { Text } from "@react-native-material/core";

const Tab = createBottomTabNavigator()

const CustomMySalesButton = () => {
    return(
        <TouchableOpacity
            style = {{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style = {{
                width: 54,
                height: 54,
                borderRadius: 27,
                backgroundColor: '#D5EAF1',
            }}>
            </View>
        </TouchableOpacity>
    )
}

const BottomTab = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    position: 'absolute',
                    zIndex: 2,
                    backgroundColor: '#D5EAF1',
                    borderTopLeftRadius:15,
                    borderTopRightRadius: 15,
                    height: 70,
                }
            }}
        >
            <Tab.Screen name ="Home" component={DashboardEmpty} options={{
                tabBarIcon:({focused}) => (
                    <View style = {{alignItems:'center', justifyContent: 'center'}} >
                        <Image
                            source={require('../assets/homeIcon.png')}
                            resizeMode="contain"
                            width={26}
                            height={24}
                        />
                        <Text style = {{fontSize: 12}} >Home</Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name="My Sales" component={DashboardFilled} options={{
                tabBarIcon:({focused}) => (
                    <View style = {{alignItems:'center', justifyContent: 'center'}} >
                        <Image
                            source={require('../assets/mysalesIcon.png')}
                            resizeMode="contain"
                            width={26}
                            height={24}
                        />
                        <Text style = {{fontSize: 12}} >My Sales</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Notification" component={Notifications} options={{
                tabBarIcon:({focused}) => (
                    <View style = {{alignItems:'center', justifyContent: 'center'}} >
                        <Image
                            source={require('../assets/moreIcon.png')}
                            resizeMode="contain"
                            width={26}
                            height={24}
                        />
                        <Text style = {{fontSize: 12}} >More</Text>
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    )
}
export default BottomTab