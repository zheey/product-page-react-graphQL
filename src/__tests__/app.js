import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  act,
  getAllByTestId,
} from "@testing-library/react";
import App from "../App";
import { MockedProvider } from "@apollo/client/testing";
import { productService } from "../service/productService";

const mocks = [
  {
    request: {
      query: productService.GET_PRODUCTS,
      variables: {
        currency: "NGN"
      }
    },
    result: {
      data: {
        products: [
          { id: "1", title: "Buck", image_url: "bulldog", price: 4000 }
        ]
      }
    }
  }
];

async function wait(ms = 0) {
  await act(() => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}

it("Products page displays products after fetching data", async () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const loadingDiv = getByTestId(container, "loader");
  expect(loadingDiv).toHaveTextContent("Loading...");
  await wait();
  const products = getByTestId(container, "products");
  expect(products).not.toEqual(null);
});

it("Add product to cart", async() => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await wait();
  const addToCart = getByTestId(container, "addToCart1");
  fireEvent.click(addToCart);
  const cart = getByTestId(container, "cart");
  expect(cart).toBeInTheDocument();
  const cartList = getAllByTestId(container, "cartList");
  expect(cartList).toHaveLength(1);
});

it("Remove product from cart", async() => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await wait();
  const addToCart = getByTestId(container, "addToCart1");
  fireEvent.click(addToCart);
  const removeItem = getByTestId(container, "removeItem1");
  fireEvent.click(removeItem);
  const emptyText = getByTestId(container, "empty");
  expect(emptyText).toBeInTheDocument()
});

it("Increment Cart Item Counter", async() => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await wait();
  const addToCart = getByTestId(container, "addToCart1");
  fireEvent.click(addToCart);
  const increaseCount = getByTestId(container, "increase1");
  const counter = getByTestId(container, "counter");
  expect(counter).toHaveTextContent("1");
  fireEvent.click(increaseCount);
  const counter2 = getByTestId(container, "counter");
  expect(counter2).toHaveTextContent("2");
});

it("Decrement Cart Item Counter", async() => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await wait();
  const addToCart = getByTestId(container, "addToCart1");
  fireEvent.click(addToCart);
  const increaseCount = getByTestId(container, "increase1");
  const counter = getByTestId(container, "counter");
  expect(counter).toHaveTextContent("1");
  fireEvent.click(increaseCount);
  const counter2 = getByTestId(container, "counter");
  expect(counter2).toHaveTextContent("2");
  const decreaseCount = getByTestId(container, "decrease1");
  fireEvent.click(decreaseCount);
  const counter3 = getByTestId(container, "counter");
  expect(counter3).toHaveTextContent("1");
});
