## useDispatch()
* It is a hook from react-redux library.
* It basically returns  function i.e dispatch.
* It is same as redux store dispatch.
* Ex=> avaialble in day03/src/comp/product/electronic


## Combined Reducer
* If there are multiple reducers in the React application then first combine all the reducers into one reducer and then pass the combined reducer as 1st argument to the legacy_createStore().

### combineReducer()
* It is a pre-defined function given by redux.
* It is used to combine all the reducers into one reducer.
* It takes one argument i.e object.
* Inside this object pass all the reducer as in key:value formate.
* The key can be anything and the value is the all individual reducer.
* It returns a combined reducer which we can catch in a variable and pass it as 1st argument to the legacy_createStore().
* Ex=> available in day03/src/comp/redux/store

## Note
* Whenever dispatch() will be called then dispatch() will call all the reducers registered with the redux store.
* Lets say that if you have created 100 reducers then one dispatch() will call all 100 reducers and this is a major Drawback with the reducers.
* So, it is recommended that create as many as less reducers inside the React application as much as possible.