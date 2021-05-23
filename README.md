# Getting Started with Calendar Call Scheduler

## About Project

This is a web application feature that allows you add products to cart, remove from cart and increament them cart items. It also display product prices based on user selected currency.
This feature is a replica of luminskin product page. 

This project is made up of several ReactJS functional components integrated together to become a whole feature.
It was built as functional component for separation of functionalities, reusablity and scalability. Also for easy readability.

## Project Components

### React Functional Components
These component handle the views and UI logic of the project. In this project a `React.Context` and `useReducer` are used to create a shared state within the project.

#### Products Component
This holds the products that are fetched from a GraphQL API using useQuery an Apollo client.

#### Cart Component
This is used to hold the products the user is interested in buying. Products can be

#### Common Components
This contains smaller components that are put together to make a whole component.

### React Context
This was used to share states between different components.

### React Reducer
React hooks `useReducer` was used to dispatch most actions and update the state.

### Helper Methods
This was used to abstract some data in the UI Logic.

### Services
This was created to make API calls to the backend and retrieve data for the application usage.

### StyleSheets
`SASS` was used to style the component. The decision was because of its nested syntax, and offer for reusability.

### Testing
Test was created for the app specification

## Installation
### `Clone Repository`:
This project can only be run on a local machine for now. Kindly clone this repository.

### `Install Dependency`:
Run `yarn` to install all dependencies.

## Library Used
### `ReactJS`
### `GraphQL`
### `Apollo Client`
### `SASS`
### `Jest` and `React Testing Library` for testing

## Improvements
This application was built in a short time and there are some modifications that would be done to improve it continually.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
