
import { useState } from "react";
import Text from "./Components/Child-Parent/Text";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import List from "./Components/List/List";
import A from "./Components/Module/A";
import B from "./Components/Module/B";
import Input from "./Components/Parent-Child/Input";
import Cardd from "./Components/Phases/Cardd";
import Table from "./Components/Phases/Table";
import Nav from "./Components/State_API/Nav";
import Profile from "./Components/State_API/Profile";
import Todo from "./Components/Todo/Todo";
import Header from "./Header";
import Timer from "./Components/Timer/Timer";
import Dom from "./Components/DOM/Dom";
import UnControlledForm from "./Components/Form/UnControlledForm";
import ControlledForm from "./Components/Form/ControlledForm";
import A1 from "./Components/Context/Context_API_Test/A1";
import Header1 from "./Components/Context/Header1";
import Auth from "./Components/Context/Auth";
import {loginContext} from './Components/Context/Context_API_Test/Context'
import {Navigate, Route, Routes} from 'react-router-dom'
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Product from "./Components/Products/Product";
import Electronic from "./Components/Products/Electronic";
import Jewelery from "./Components/Products/Jewelery";


function App() {
  // var header=true;
  // const [state,setState] = useState(false);


  // const [state,setState] = useState({
  //   isLoggedIn: false,
  //   user: 'Guest User',
  // })

  // const fnLoggedIn = (data) => {
  //   setState(data);
  // }

  // const fnLoggedOut = () => {
  //   setState({
  //     isLoggedIn: false,
  //     user: 'Guest User',
  //   })
  // }


  return (

    // Just below is the example of conditional rendering
    // <div>
    //   {header?<Header />:<Footer />}
    // </div>
    
    // <div className="App">
    //   <Header item1='React'/>
    //   <Header item1='HTML'/>
    //   <Header item1='CSS'/>
    //   <h2>Welcome to React world</h2>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur officiis ad inventore sunt totam? Quod vero omnis asperiores maiores doloremque illum optio! Distinctio, esse aliquid temporibus iure eaque nemo sed.
    //     Rem quod soluta, officia distinctio, illo consequatur placeat cum suscipit voluptatum illum fuga dolorem, molestias minus blanditiis! Animi quidem molestiae aliquid unde nisi quos debitis modi odio commodi! Quisquam, dolor?
    //   </p>
    //   <Footer />
    // </div>

    <div>
      {/* <loginContext.Provider value={{state, fnLoggedIn, fnLoggedOut}}>
        <Header1 />
        <Auth />
      </loginContext.Provider> */}
      
      <Nav />
      <Routes>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/todo' element={<Todo />}/>

        <Route path='/products' element={<Product />}>
          <Route path="" element={<Navigate to='electronic' />}/>
          <Route path="electronic" element={<Electronic />}/>
          <Route path="jewelery" element={<Jewelery />}/>
        </Route>
        
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      
      
      {/* <div style={{padding:'50px 100px'}}>
        <A1 />
      </div> */}
      
      {/* <ControlledForm /> */}
      {/* <UnControlledForm /> */}
      {/* <Timer />
      <Dom /> */}
      {/* {state ? <Cardd /> : <Table />}
      <div style={{textAlign:'center', marginBottom:'50px'}}>
        <button onClick={()=>{setState(true)}}>Show Card</button>
        <button onClick={()=>{setState(false)}}>Show Table</button>
      </div> */}
      
      {/* <Text /> */}
      {/* <Input /> */}
      {/* <A /> */}
      {/* <B /> */}
      {/* <Profile /> */}
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
