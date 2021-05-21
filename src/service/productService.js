import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
  query GetProducts {
    products{
        image_url
        price(currency: NGN)
        title
    }
  }
`;

export const productService = {
    GET_PRODUCTS
};