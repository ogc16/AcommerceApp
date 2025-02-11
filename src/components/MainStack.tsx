import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { ProductDetailsScreen } from "./screens/ProductDetailsScreen";
import { CartScreen } from "./screens/CartScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Shop" }}
            />
            <StackNavigator.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{ title: "Product Details" }}
            />
            <StackNavigator.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: "Shopping Cart" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);