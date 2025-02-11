import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Dialogs } from '@nativescript/core';

type ProductDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "ProductDetails">,
    navigation: FrameNavigationProp<MainStackParamList, "ProductDetails">,
};

export function ProductDetailsScreen({ navigation, route }: ProductDetailsScreenProps) {
    const productId = route.params.productId;
    
    const addToCart = () => {
        Dialogs.alert({
            title: "Success",
            message: "Product added to cart!",
            okButtonText: "OK"
        });
    };

    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <image
                    src={`https://picsum.photos/200?id=${productId}`}
                    className="w-full h-64 rounded-lg"
                    stretch="aspectFill"
                />
                <label className="text-2xl font-bold mt-4">Product Name</label>
                <label className="text-xl text-green-600 mt-2">$99.99</label>
                <label className="text-gray-600 mt-2">
                    Detailed product description goes here. This is a sample description
                    of the product with its features and benefits.
                </label>
                <button
                    className="bg-indigo-600 text-white p-4 rounded-lg mt-4"
                    onTap={addToCart}
                >
                    Add to Cart
                </button>
            </flexboxLayout>
        </scrollView>
    );
}