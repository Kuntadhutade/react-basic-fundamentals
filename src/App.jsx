import Components from './components/01-Components'
import Props from './components/02-Props';
import State from './components/03-state';
import Event from './components/04-Event';
import EventHandling from './components/05-EventHandling';
import Listkeys from './components/06-Listkeys';
import Listkey from './components/Listkey';

import './App.css'


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
    <Listkey/>

    </>
  )
}

export default App;
