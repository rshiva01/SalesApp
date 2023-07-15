import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createAppContainer} from 'react-navigation'
import OnBoarding2 from "../screens/onBoarding2";
import OnBoarding3 from "../screens/onBoarding3";

const screens = {
    onBoarding2: {
        screen: OnBoarding2
    },
    onBoarding3:{
        screen: OnBoarding3
    },
}

const HomeStack = createNativeStackNavigator(screens)

export default createAppContainer(HomeStack)