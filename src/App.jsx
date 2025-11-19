// import { useState } from "react";
import "./App.css";
import Textbox from "./components/Textbox";

function App() {
  // const [CSV, setCSV] = useState("");

  const json_example = [
    {
      key: "value",
      key2: "value2",
    },
    {
      key: "value3",
      key2: "value4",
    },
  ];

  const csv_example = "Key,Key2\n" + "value,value2\n" + "value3,value4\n";

  return (
    <>
      <h1>JSON -&gt; CSV</h1>
      <form id="json-form">
        <Textbox name="json" id="json-box" placeholder={JSON.stringify(json_example)} />
        <br/>
        <button type="submit">Convert</button>
      </form>
      <Textbox name="csv" id="csv-box" placeholder={csv_example} />
    </>
  );
}

export default App;
