## Routing in React & react-router-dom
* Routing is a technique to switch from one Comp to another Comp based on browser path.
* If we want to implement Routing Concept then we have to take help from a third party Library because React do not provide Routing technique itself.
* This third party Library is "react-router-dom" which will help Routing in React Apllication.
* react-router-dom provides some set of pre defined Components and hooks.
* Ex=> BrowserRouter, Routes, Route, Outlet, Navigate, Link, NavLink etc.

## Steps to implement Routing
1. Install react-router-dom-in React Application.
    npm install react-router-dom

2. Wrap Parent Comp inside BrowserRouter Comp.
* Ex=> <BrowserRouter>
            <App />
        </BrowserRouter>
        also available in day03/src/index.js

3. Configure the Route in React App using a Comp called Route.
* Route Comp takes two argument, first is "path" where we give the path and 2nd is "element" where we call the Comp whichever we want for the given path.
* Ex=> <Route path='/' element={<Home />} />
    available in day03/src/app.js

4. Wrap all Route Comp inside a Comp called Routes.
* EX=> <Routes>
            <Route path='' element=''/>
            <Route path='' element=''/>
        </Routes>
        also available in day03/src/app.js

* Any application which reloads on using certain links like anchor tag then it is called Traditional Application or Multi Page Application.
* Performance of Traditional Application are poor/slow because of reloading itself each time.
* To over come this problem, Single Page Applications(SPAs) came in picture.


## Single Page Application(SPA)
* An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

* This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

* Using (React + React-Router-DOM), we can create a Single Page Application.

* To avoid reloading of Application, react-router-dom provide a Component called Link.
* Link is similar to Anchor tag, So we can use Link instead of Anchor tag.
* Link Comp takes one argument i.e "to" where we give the path of the Comp.
* Ex=> available in day03/src/state_api/nav.js

* If user is entering any path manually or if we are using any Link which is not configured then we can show a message like "Page Not Found" to the user using Route Comp and we have to pass the path as "*" as argument and This Route should be at the last position inside Routes Comp.
* Ex=> available in day03/src/app.js


## Internal Routing
* When we call or swith Component within a Component then it is called Internal Routing.
* We can do Internal Routing using a Comp called Outlet Comp given by react-outer-dom.
* Ex=> available in day03/src/comp/product/product

* And we have to configure another Route Comp within already present Route Comp.
* The path of internal Routing does not include "/" in Route as well as in Link Comp.
* Ex=> available in day03/src/comp/app

* If we want to show any default Component inside Internal Routing then we can use a Comp called Navigate inside the Route Comp.
* For this, the path of Route Comp shoul be empty and we call Navigate Comp as element of Route Comp.
* Navigate Comp takes one argument i.e "to" and we give the path path of the default Comp as value of "to".
* Ex=> available in day03/src/app.js
