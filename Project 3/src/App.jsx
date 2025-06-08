import Gameplay from "./components/Gameplay";
import Startproject from "./components/Startproject"
import { useState } from "react"

const App = () => {
  const [isGetStarted, setIsGetStarted] = useState(true);

  const toggleGamePlay = () =>{
    setIsGetStarted((prev) => !(prev));
  }

  return (
    <>
    {isGetStarted ? <Gameplay/> : <Startproject toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
