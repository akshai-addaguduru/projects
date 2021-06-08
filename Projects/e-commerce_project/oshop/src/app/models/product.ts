// here this interface will help in directly fetching the model of Product from here instead of searching everytime from the firebase
export interface Product {
  title: string
  price: string;
  category: string;
  imageUrl: string;
}