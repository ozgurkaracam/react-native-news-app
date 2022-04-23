import React from 'react';
import TabsNavigation from "./TabsNavigation";
import Details from "./Details";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabsNavigation} options={{
                headerShown:false
            }} />
            <Stack.Screen name="Details" component={Details}  />
        </Stack.Navigator>
    );
}

export default StackNavigator;