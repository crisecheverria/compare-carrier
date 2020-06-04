This project was created with Create React App + Bulma + Axios + OpenWeather + Decimal.js

## Demo

Some says that an image talk more than 1000 words!
What about a Live Demo!... uff 100,000 words?... Who knows!

You can find a [live demo here](https://cocky-banach-75db02.netlify.app/)

Althought the repo of the project was uploaded as a **Private Repo**.

## Components Structure

I decided to structure the hierarchy of the components like this:

```
App Component
  - Buttons Component      
  - Products Component      
    - Product Component
```

The main `<App />` component create the initial state `parameterState` and also a function `sortByParameter(parameter)`. <br />
From App we pass props to his childrens `<Buttons sortBy={sortByParameter} />` && `<Products sortParameter={parameterState} />`

Once `<Buttons />` component handle the logic for the **Sort by** it send back to his parent the selected sort from the user.<br />
Based on that, App component update the `parameterState` and send that info to his children `<Products />` who get the data from `products.json` and also handle the logic for the sorting.

## products.json

Using the file `/src/services/products.json` in order to read hardcoded data provided for the challenge.<br />
Created a fake product service in order to read `products.json` and export the method `getProducts()` the path is in `/src/services/fakeProductService.js`. <br />
This was made in order to work in a modular way and for better file structure of the project. 

## OpenWeather API

Created a file named `config.json` where you can find the `weatherApiUrl` and add your own API_KEY there.<br />
Currently is using my API_KEY, but it can be replaced with a new one.

Decided to use `Axios` in order to make the fetch request on the `weatherApiUrl` for the city of Gothenburg. <br />
As a comment, it can be good if we can add a dropbox or selector where we can select the city for the weather... maybe in the future!.

## Utils functions

I wrote a couple of utility functions in order to avoid to much poluttion inside the components. The patch is on `/src/utils`.<br />
This is another intent from me in order to write clean code. <br />

Inside this utility functions file I decided to go with a third-part library called `decimals.js` for managing float numbers operations, in this case I decided to fix 5 numbers (116.85 kr, 59.831 kr) and it can be updated. Is a small library that prevent bad behavior when making operations calculating the cost changes depending on the Weather.

## Bulma

Decided to use Bulma in order to save time for the app Layout and general styling of elements like buttons and boxes.<br />
Althought I made a couple of re-adjusment on the styling in general to make it look a bit more similar with the UI provided.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
For the test, the library used was **react-testing-library** that comes build in Create React App latest version.

### `yarn lint`

The project was setup using **ESLint + Airbnb Rules** in order to make sure the code syntax remane the same.< br/>
This is basically just a set of rules or guideline to follow when writing code.

### `yarn lint:fix`

In order to fix code breaking Airbnb linting rules.
