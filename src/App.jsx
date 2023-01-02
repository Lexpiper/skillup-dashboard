import Navbar from "./components/Navbar";
import SIdebar from "./components/SIdebar";
import Statistics from "./components/Statistics";
import Widgets from "./components/Widgets"

function App() {
  return (
    <div className="flex flex-6">
      <SIdebar />
      <div className="flex-1 px-8 ml-1  md:ml-60">
        <Navbar />
        <div className="flex items-center w-full h-screen">
          <div className="b w-full  md:w-[70%] h-screen p-4">
            <Widgets/>
            <Statistics/>
          </div>
          <div className="h-screen hidden md:w-[30%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ipsum sit excepturi eum libero, quis corporis cum dignissimos velit
            id, impedit, laudantium tempore quia repellat autem sapiente tenetur
            eligendi vel?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
