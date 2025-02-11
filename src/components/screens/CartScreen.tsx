import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Dialogs } from '@nativescript/core';

type CartScreenProps = {
    route: RouteProp<MainStackParamList, "Cart">,
    navigation: FrameNavigationProp<MainStackParamList, "Cart">,
};

export function CartScreen({ navigation }: CartScreenProps) {
    const checkout = () => {
        Dialogs.alert({
            title: "Success",
            message: "Order placed successfully!",
            okButtonText: "OK"
        }).then(() => {
            navigation.navigate("Home");
        });
    };

    return (
        <flexboxLayout className="flex-col p-4">
            <label className="text-xl text-center text-gray-600">
                Your cart is empty
            </label>
            <button
                className="bg-indigo-600 text-white p-4 rounded-lg mt-4"
                onTap={checkout}
            >
                Checkout
            </button>
        </flexboxLayout>
    );
}