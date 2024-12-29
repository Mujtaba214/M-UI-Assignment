import Nav from "./components/Nav"
import './App.css'
import Accordion from "./components/Acc"
import { Data } from "./Data";
import CardData from "./components/CardData";
import DrawerComp from "./components/DrawerComp";
import Mod from "./components/Mod";


function App() {

  return (
    <>
      <Nav />
      <div style={{ marginTop: "10px" }}>
        <Accordion />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", padding: "6px" }}>
        {Data.map((e, i) => (
          <CardData key={i} title={e.title} image={e.image} description={e.description} price={e.price} category={e.category} />
        ))}
      </div>
      <div style={{textAlign:"center",margin:"30px"}}>
        <DrawerComp />
      </div>
      
      <div style={{textAlign:"center",margin:"30px"}}>
        <Mod />
      </div>
      
    </>
  )
}

export default App
