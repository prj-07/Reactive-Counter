import { Component } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function FirstComponent() {
  return <div>First component it is ? </div>;
}
function SecondComponent() {
  return <div>Second component it is ! </div>;
}

class ThirdComponent extends Component {
  render() {
    return <div> this is a class component!</div>;
  }
}

export default App;
