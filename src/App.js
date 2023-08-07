import React ,{useState}  from "react";
import NavBar from "./component/NavBar";
import Card from "./component/Card";
import Header from "./component/Header";


function App() {
let[cartValue,setCartValue]=useState(0)

  return <>
  <NavBar cartValue={cartValue}/>  
    <Header />
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <Card setCartValue={setCartValue}/>
              <Card setCartValue={setCartValue}/>
              <Card setCartValue={setCartValue}/>
             <Card setCartValue={setCartValue}/>
             
         </div>
    </div>
   </section>
  </>

}

export default App;
