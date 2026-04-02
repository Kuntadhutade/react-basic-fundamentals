import "./App.css";
import Components from './components/01-Components'
import Props from './components/02-Props';
import State from './components/03-state';
import Event from './components/04-Event';
import EventHandling from './components/05-EventHandling';
import Listkeys from './components/06-Listkeys';
import Listkey from './components/Listkey';
import ConditionalRender from './components/07-ConditionalRender';
import ConditionRender from './components/ConditionRender';
import Forms from './components/08-forms';
import LoginForm from './components/08-LoginForm';
import About from "./components/09-routing/About";
import Contact from "./components/09-routing/Contact";
import Home from "./components/09-routing/Home";
import Navbar from "./components/09-routing/Navbar"
import {Routes, Route} from "react-router-dom"


function App() {
  const items = ["Home","About","Services","contact","Join Us"]
  

  return (

    <>
     {/* <Components/> */}
    {/* <Props  logoText="NavbarLogo" color="white" backgroundColor="#030e45" items={items} /> */}
    {/* <State/> */}
    {/* <Event/> */}
    {/* <EventHandling /> */}
    {/* <Listkeys/> */}
    {/* <Listkey/> */}
    {/* <ConditionalRender/> */}
    {/* <ConditionRender /> */}
    {/* <Forms/> */}
    {/* <LoginForm/> */}

   

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    </>
  )
}

export default App;
