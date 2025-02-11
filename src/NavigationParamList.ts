/**
 * A record of the navigation params for each route in your app.
 */
export type MainStackParamList = {
  Home: {};
  ProductDetails: {
    productId: number;
  };
  Cart: {};
};

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}