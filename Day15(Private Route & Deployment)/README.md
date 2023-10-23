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


## Deployment
* The process of making our Application available to entire world is called deployemnt.
* We can deploy our frontend application on many plateforms like AWS, GCP, Netlify, Heroku etc.

## How to Deploy on Netlify
There are multiple ways using which we can deploy our application on Netlify like by linking Github Repo, Netlify CLI, Drag and Drop etc. Lets see how to deploy using Netlify CLI.

1. Create account on Netlify using github.
2. Install netlify cli on your system using command "npm install netlify-cli -g".
3. In package.json file, add a following property
    * "Homepage": "."
4. Build the application using the command "npm run build".
    * By building the application, it optimize our application in one file and removes etra spaces, comments etc.
    * After building the application, a folder named as "build" is created automatically.
5. Inside the "public" folder create a file named as "_redirects" and then add "/* /index.html 200" inside the "_redirects" file.
6. Hit the command "netlify deploy" and then it will ask some question like "Link this directory to an existing site" and "Create a configure a new site".
7. Select the 2nd option and press Enter key. After this it will show your netlify id name and then again press Enter key.
8. Now it will ask your site name where you can type your site name and press Enter key.
9. Now it will ask that which folder/directory you want to deploy. So type "build" and press Enter key.
10. Now it will give you a draft url using which you can check your deployed application.
11. Hit the command "netlify deploy --prod" and then it will ask again which folder/directory you want to deploy. So again type "build" and press Enter key.
* Now it will give you the final deployed URL of your application through which you can access your application.


## How to deploy on Vercel
1. Create an account on Vercel.
2. Install Vercel on your system using command "npm install vercel -g".
3. Hit the command "vercel".
4. Now answer to the questions asked by vercel to complete the deployment process like netlify.
5. Atlast hit the command "vercel --prod" to deploy and get the final url of your application.


## Environment Variable (.env file)
* Anything which we do not want to share with others, can be kept inside ".env" file as an environment variable.
1. Create ".env" file.
    Ex=> available in day03/demmoapp.
2. Now create the variable inside ".env" file.
3. Variable name should be in capital letter and should start with "REACT_APP" and then we can give any custom name in the addition like "REACT_APP_USERNAME".
    Ex=> available in day03/demmoapp/.env
4. Now to access this variable in any file of your application use "process.env.REACT_APP_USERNAME" and "process.env.REACT_APP_PASSWORD".
    Ex=> available in day03/demmoapp/src/comp/context/login.js
