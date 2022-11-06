import React from "react";
import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jake", "jassica", "jerry"]}
      />
    </div>
  );
}

export default App;
