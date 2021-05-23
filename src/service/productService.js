import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
  query GetProducts {
    products{
      id
      image_url
      price(currency: NGN)
      title
      product_options{title, options{value}}
    }
  }
`;

export const productService = {
    GET_PRODUCTS
};