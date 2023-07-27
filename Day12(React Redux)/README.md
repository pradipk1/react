## Steps to Implement Redux Pattern in JS file not in React
1. Create a js file and implement two functions
    Ex=> available in day12/js/index.js
2. create package.json file using a command called " npm init -y "
3. add "type":"module" property in package.json file
4. install redux library using command " npm install redux "
5. create store using createStore of redux library and export it
    Ex=> available in day12/js/redux/store
6. create reducer which is a simple JS function and export it
7. register the reducer with the store
    * go to store.js and import the reducer and then pass it as argument inside createStore();
    * Ex=> available in day12/js/redux/store
8. create action which is a JS function and export it
    * Ex=> available in day12/js/redux/action
9. call the dispatch function inside action and pass the Data to dispatch
    * first import myStore and then call dispatch like "myStore.dispatch()"
    * Ex=> available in day12/js/redux/action
10. Now whatever we have passed inside action that data will go to the reducer's 2nd argument and then we can write our logics to modify the state inside reducer with the action data.
    * Ex=> available in day12/js/redux/reducer
11. finally import action inside index.js and call the action inside the two function created in the 1st step and pass the Data to action




## Reducer
* Reducer is a special JS function which takes two Parameter, they are "state and action", and it returns state.
* Ex=> available in day12/js/redux/reducer
* The State which is returned by reducer will be stored inside the redux store
* Using reducer we can modify State and add new Data inside redux store

## dispatch()
* It is a special pre-defined function which is coming from redux store.
* Using dipatch we can call reducers and we can pass the Data to the reducers.
* dispatch() takes one argument i.e object which is also called as "Action Object".
* Action Object takes one mendatory property i.e "type" and its value should be unique in whole Application.
* We can pass any number of properties to the Action Object.

## getSate()
* Using getState() we can access entire Data of redux store
* import myStore and then call getState() as myStore.getState()
* Ex=> available in day12/js/redux/index


## Steps to implement Redux in React
* Almost all the steps are going to be same as previous we have written for JS above.
1. install redux in Application
2. Create reduxStore
    * Ex=> available in day03/src/comp/redux/store
3. To make reduxStore available to React Application we have to take help from a 3rd party Library called as "react-redux" which provides a Comp called Provider and we have to grab our Parent Comp inside the Provider Comp.
    * Ex=> available in day03/src/index.js
4. Create reducer and export it.
    * Ex=> available in day03/src/comp/redux/nameReducer
5. Import reducer inside reduxStore and pass the reducer as 1st argument of legacy_createStore().
6. Create action and export it
    * Ex=> available in day03/src/comp/redux/nameAction
7. Inside action call the dispatch() and pass an object which has a mendatory property called as "type".
    * Ex=> available in day03/src/comp/redux/nameAction
    * So now, dispatch() will call the reducer function and pass the Data to reducer.
8. Now, modify the state inside reducer according to need using action Data
    * Ex=> available in day03/src/comp/redux/nameReducer
9. Call the action inside React Comp and pass the data to action.
    * Ex=> available in day03/src/comp/redux/input1



## react-redux
* It is a Library which makes redux store available to React App.
* It provides a Comp called "Provider".
* We have to grab our Parent Comp inside the Provider Comp.
* It takes a prop which is "store" and the value of this prop is redux store which we create using redux library.
* Ex=> available in day03/src/index.js


## redux-logger
* It is a middleware.
* Using this redux-logger we can visualize the redux store.

## Steps to use redux-logger
1. install redux-logger using command "npm install redux-logger".
2. configure it with the redux store.
    * go to the store.js file
    * import "logger" from redux-logger
    * import "applyMiddleWare" from redux
    * pass the "applyMiddleWare" as 2nd argument inside legacy_createStore()
    * pass the logger as 1st argument inside applyMiddleWare()
    * Ex=> available in day03/src/comp/redux/store


## useSelector()
* It is a pre-defined hook from reacr-redux.
* Using this we can access the redux store data.
* Whenever redux store will be updated then UI will also be get updated.
* It takes one argument i.e callback function.
* This callback function takes one parameter and inside this parameter redux store data will be stored.
* Ex=> available in day03/src/comp/redux/display


## Note
* Hooks can be called only inside the React Components and not in the normal JS file.