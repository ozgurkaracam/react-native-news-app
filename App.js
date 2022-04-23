import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from "@expo/vector-icons";
import News from "./screens/News";
import Favorites from "./screens/Favorites";
import TabsNavigation from "./screens/TabsNavigation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Details from "./screens/Details";
import StackNavigator from "./screens/StackNavigator";
import {Provider} from "react-redux";
import {store} from "./redux/store";

export default function App() {

    return (
        <NavigationContainer>
            <Provider store={store}>
                <StackNavigator/>
            </Provider>
        </NavigationContainer>
    );
}