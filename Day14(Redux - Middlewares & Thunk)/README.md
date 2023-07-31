## .subscribe()
* It is a pre-defined function in Redux using which we can get information whenever redux store gets updated.
* It takes one argument i.e callback function and inside this callback function we can write our logic whatever we want.
* If we are not using any middleware to visualize the redux stoe then we can use this instead.
* Ex=> available in day03/src/comp/redux/store


* React & Redux people recommend that all your side effects should be done outside of the React Comp.
* For example fetching things from API call is a side effect for React like we are doing in day03/src/comp/products/electronic inside useEffect().
* That's why, now we are going to do fetching things inside Action directly and we will update the redux store from there.
* So, previously we were fetching the data inside useEffect and then we were updating redux store and state, but now we are 1st updating the redux store and then we are using inside React Comp.
* Ex=> available in day03/src/comp/products/electronic


## Redux - Thunk
* It is a action(functon) which is used to perform side effects inside redux application.
* It takes 2 parameters, 1st is dispatch and 2nd is getState.
* Previously we were passing the store data and dispatch to the action.
* But now Redux thunk will provide dispatch and getState methods.

## Steps to Implement redux-thunk
1. Install it using command "npm i redux-thunk"
2. Go to store.js file and import "thunk" from "redux-thunk"
3. Configure it with the redux store
    * Pass it as an argument inside applyMiddleware()
    * Ex=> available in day03/src/comp/redux/store
4. Create a function named as "electronicthunkAction"(you can give any name) and pass getState and dispatch as parameters and write logics of side efffects inside this function.
    * Ex=> available in day03/src/comp/products/redux_pipeline/electronicThunkAction
5. Export this function.
6. Import this function inside day03/src/comp/products/electronic.jsx
7. Just pass(not call this function) this imported function inside dispatch() as an argument.
    * Ex=> day03/src/comp/products/electronic.jsx


## Redux Thunk Action Creator
* It is a function which will return redux thunk action.
* In previous method, we were not able to pass any extra parameter like url apart from dispatch and getState.
* But using this technique, we can pass that extra parameter.

## Steps to Implement ReduxThunkActionCreator
1. Create a function named as "reduxThunkActionCreator"(you can giv any name) and pass the extra parameters whatever you want to pass.
2. This function should return redux thunk action(which is also a function)
3. Now utilize the passed extra parameters inside redux thunk action.
4. Export this reudxThunkActionCreator.
5. Import this function inside day03/src/comp/products/electronic.jsx
6. Now call this imported function inside dipatch as an argument and pass the extra parameters inside this imorted function.
    * Ex=> day03/src/comp/products/electronic.jsx


## Some recommendations to explore on your own
* redux saga => This is an alternate of redux thunk
* useReducer() hook from react
* diff btw useState() and useReducer()
* diff btw Functional Comp and Class Comp
* Higher Order Component(HOC Pattern)
* useMemo() and useCallback() hook from react
* Life Cycle Methods in Class Comp => They are around 10 or 12 life cycle methods
* Portals
* Error boundaries
