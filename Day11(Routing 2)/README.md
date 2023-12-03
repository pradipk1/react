## Path Parameter or URL Parameter
* Ex=> https://fakestoreapi.com/products/1

    In the above URL, there are some parameters like protocol, domain name, path, information etc.
    http => Protocol
    fakestoreapi.com => Domain name of the website
    products => Path of the website
    1 => Information or Path parameter

* We can add more Path Parameters to the end of the URL by using "/"
* Ex=>  https://fakestoreapi.com/products/1/kabir

* In the Route Comp if we are using ":" just after "/" then whatever we write just after ":" it will be a Path Parameter for the React.
* Ex=> <Route path="/productdetails/:id" element={<ProductDetails />}/>
    In this Ex. the "id" is a Path Parameter.


## Query Parameter or Search Params
* Using Query Parameter, we can ask some information from the server.
* we put a "?" after the path of the URL and then we add our queries in the key value formate.
* Ex=> https://fakestoreapi.com/products?gender=male

* If there are more than one Query then we have to put "&" between all the Query Parameter.
* Ex=> https://fakestoreapi.com/products?gender=male&sort=asc

* In the Route Comp if we are using "?" just after "/" then whatever we write just after "?" it will be a Query Parameter for the React.
* Ex=> <Route path="/counter/?gender=male&sort=asc" element={<ProductDetails />}/>
    In this Ex. the "gender" and "sort" are Query Parameters.



## useParams()
* It is a hook from react-router-dom.
* Using this hook we can access URL Path Parameters.
* useParams() hook returns one object.
* This object has all the path parameters as properties.
* Ex=> available in day03/src/comp/product/productdetails


## Object.keys()
* This is a pre-defined Javasript function
* It takes one argument which is a Object.
* It returns an array of all the keys present inside that Object.
* If we pass an empty Object as argument of Object.keys() then it will return an empty array.
* So, using this concept we can find like if an Object is empty or not etc.
* Ex=> available in day03/src/comp/product/productdetails


## useSearchParams()
* It is a hook from react-router-dom.
* Using this hook we can access URL Query Parameters.
* It returns one array of length two, at 0th index it gives an object named as "searchparam" and at first index it provides a function named as "setSearchParam()".
* The searchparam object provides all Query Parameters as properties.
* Using setSearchParam(), dynamically we can configure Query Parameters.

* If we want to access any Query Parameter out of the searchparam object then we can use ".get()" method.
* .get() takes one string in which we pass the one key of Query Parameter.
* Ex=> searchparam.get("gender")
    In the above ex. lets say that searchparam has key as gender and its value is male then the above method will return "male"
    Ex=> available in day03/src/comp/counter

* To set Query Parameters dynamically we can use setSearchParam(), here we can pass an object of Query Parameters as argument inside setSearchParam().
* Ex=> setSearchParam({filter:"electronic"});
    also available in day03/src/comp/counter
