import { useSelector } from "react-redux";
import "./App.css";
import CounterBtn from "./components/CounterBtn";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import store from "./store";
import PrivacyMode from "./components/PrivacyMode";

function App() {

  const privacy = useSelector(store => store.privacy)

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Header />
      <div className="col-lg-6 mx-auto">
        {privacy ? <PrivacyMode /> : <DisplayCounter />}
        <CounterBtn />
      </div>
    </div>
  );
}

export default App;
