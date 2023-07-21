import { useState } from "react"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";


function App() {

  const [showResume, setShowResume] = useState(false);



  return (
    <div className="flex flex-col bg-gradient-to-b from-cyan-300 to-blue-300">
      <Header />
      <Body showResume={showResume} setShowResume={setShowResume} />
    </div>
  );
}

export default App;
