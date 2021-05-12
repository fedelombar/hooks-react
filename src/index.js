import React from "react";
import ReactDOM from "react-dom";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { HookApp } from "./HookApp";

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
