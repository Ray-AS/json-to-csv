import { useState } from "react";
import "./App.css";
import Textbox from "./components/Textbox";

function App() {
  const jsonExample = [
    {
      key: "value",
      key2: "value2",
    },
    {
      key: "value3",
      key2: "value4",
    },
  ];

  const CSVExample = "Key,Key2\n" + "value,value2\n" + "value3,value4\n";
  const [CSV, setCSV] = useState(CSVExample);

  function validateItem(item) {
    if (typeof item !== "object" || item === null || Array.isArray(item))
      return false;
    return true;
  }

  function validate(jsonData) {
    try {
      JSON.parse(jsonData);
    } catch {
      return false;
    }

    jsonData = JSON.parse(jsonData)
    
    if (!Array.isArray(jsonData) || jsonData.length === 0) return false;

    if (!validateItem(jsonData[0])) return false;
    const keys = Object.keys(jsonData[0]).sort();
    const keyString = keys.join("-");

    for (let item in jsonData) {
      if (!validateItem(item)) return false;
      const itemKeys = Object.keys(item).sort();
      const itemKeyString = itemKeys.join("-");

      if (itemKeyString !== keyString) return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;
    
    if(!validate(jsonData)) {
      alert("Invalid data")
      return
    }
  }

  return (
    <>
      <h1>JSON -&gt; CSV</h1>
      <form id="json-form" onSubmit={handleSubmit}>
        <Textbox
          name="json"
          id="json-box"
          placeholder={JSON.stringify(jsonExample)}
        />
        <br />
        <button type="submit">Convert</button>
      </form>
      <Textbox name="csv" id="csv-box" placeholder={CSV} />
    </>
  );
}

export default App;
