import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList, Product } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

const products: Product[] = [
    {
        id: 1,
        name: "Wireless Earbuds",
        price: 99.99,
        description: "High-quality wireless earbuds with noise cancellation",
        image: "https://picsum.photos/200",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-rich smartwatch with health tracking",
        image: "https://picsum.photos/201",
    },
    {
        id: 3,
        name: "Laptop Backpack",
        price: 49.99,
        description: "Durable laptop backpack with multiple compartments",
        image: "https://picsum.photos/202",
    },
];

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <button
                    className="text-white bg-indigo-600 p-2 rounded-lg mb-4"
                    onTap={() => navigation.navigate("Cart")}
                >
                    View Cart
                </button>
                
                {products.map((product) => (
                    <flexboxLayout
                        key={product.id}
                        className="flex-col bg-white rounded-lg p-4 mb-4 shadow"
                        onTap={() => navigation.navigate("ProductDetails", { productId: product.id })}
                    >
                        <image
                            src={product.image}
                            className="w-full h-40 rounded-lg"
                            stretch="aspectFill"
                        />
                        <label className="text-xl font-bold mt-2">{product.name}</label>
                        <label className="text-lg text-green-600">${product.price}</label>
                    </flexboxLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}