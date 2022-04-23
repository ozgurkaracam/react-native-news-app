import React from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import News from "./News";
import Favorites from "./Favorites";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function TabsNavigation(props) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'News') {
                        iconName = 'home';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'favorite' : 'favorite-border';
                    }

                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen  name="News" component={News} options={{
                headerTitle:'Latest News'
            }} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
}

export default TabsNavigation;