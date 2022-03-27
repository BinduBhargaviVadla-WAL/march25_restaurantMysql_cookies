import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import City from "./City";
import NameValueTime from "./NameValueTime";
import Category from "./Category";
import Dishes from "./Dishes";

function App() {
  return (
    <div className='App'>
      <City />
      <NameValueTime />
      <Category />
      <Dishes />
    </div>
  );
}

export default App;
