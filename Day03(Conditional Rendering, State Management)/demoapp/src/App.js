
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


function App() {
  // var header=true;
  const [state,setState] = useState(false);
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
      <Nav />
      {state ? <Cardd /> : <Table />}
      <div style={{textAlign:'center', marginBottom:'50px'}}>
        <button onClick={()=>{setState(true)}}>Show Card</button>
        <button onClick={()=>{setState(false)}}>Show Table</button>
      </div>
      
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
