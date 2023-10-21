## Private Route
* It is a custom Private Route.
* We use this to protect the particular Routes on some conditions.
* Like if, user is not logged in then he can not access a particular Route.


## Implementation of Private Route
1. Create a PrivateRoute Component
    Ex=> available in day03/src/comp/PrivateRoute/PrivateRoute.js
2. Import PrivateRoute Comp inside App.js
3. Pass this PrivateRoute Comp as an element insie the Route Comp, which is to be protected.
    Ex=> available in day03/src/app.js
4. Now call the respected Comp of the Route as a child of the PrivateRoute Comp on App.js
    Ex=> available in day03/src/app.js
5. Access the isLoggedIn value using loginContext.
    Ex=> available in day03/src/comp/PrivateRoute/PrivateRoute.js
6. We acn access the Comp which is to be protected inside PrivateRoute Comp using props.children
    Ex=> available in day03/src/comp/PrivateRoute/PrivateRoute.js
6. Now write logic for conditional rendering inside PrivateRoute Comp.
    Ex=> available in day03/src/comp/PrivateRoute/PrivateRoute.js

