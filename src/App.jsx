import Components from './components/01-Components'
import Props from './components/02-Props';

import './App.css'

function App() {
  const items = ["Home","About","Services","contact","Join Us"]
  

  return (
    <>
     <Components/>
    <Props  logoText="NavbarLogo" color="white" backgroundColor="#030e45" items={items} />
    </>
  )
}

export default App;
