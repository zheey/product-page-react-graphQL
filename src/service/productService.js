import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
  query GetProducts($currency: Currency!) {
    products{
      id
      image_url
      price(currency: $currency)
      title
    }
  }
`;

export const productService = {
    GET_PRODUCTS
};