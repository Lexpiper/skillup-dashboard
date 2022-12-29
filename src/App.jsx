import Navbar from "./components/Navbar"
import SIdebar from "./components/SIdebar"



function App() {
 

  return (
    <div className="flex flex-6">
      <SIdebar/>
      <div className="flex-1">
        <Navbar/>
      </div>
    </div>
  )
}

export default App
