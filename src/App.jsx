// import { useState } from "react";
import "./App.css";

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
        <textarea
          name="json"
          rows="10"
          cols="50"
          placeholder={JSON.stringify(json_example)}
        ></textarea>
        <br/>
        <button type="submit">Convert</button>
      </form>
      <textarea
        name="csv"
        rows="10"
        cols="50"
        placeholder={csv_example}
      ></textarea>
    </>
  );
}

export default App;
