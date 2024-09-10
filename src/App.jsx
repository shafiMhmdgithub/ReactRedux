import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Countainer from "./components/Container";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
const privacy = useSelector(store=>store.privacy)
  return (
  
    <div className="px-4 py-5 my-5 text-center">
      <Countainer>
        <Header />
        <div className="col-lg-6 mx-auto">
         {privacy ? <DisplayCounter /> : <PrivacyMessage/>}
          <Controls />
        </div>
      </Countainer>
    </div>

  )
}

export default App
