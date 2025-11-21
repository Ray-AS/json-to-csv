import { useState } from "react";
import "./App.css";
import TextAreaForm from "./components/TextAreaForm";
import { jsonExample, handleJSON } from "./utils/json_handler";
import { CSVExample, handleCSV } from "./utils/csv_handler";

function App() {
  const [CSV, setCSV] = useState("")

  function handleJSONSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;

    setCSV(handleJSON(jsonData));
  }

  function handleJSONChange(e) {
    console.log("json change")
  }

  function handleCSVSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const CSVData = Object.fromEntries(formData.entries()).csv;

    handleCSV(CSVData);
  }

  function handleCSVChange(e) {
    setCSV(e.target.value)
  }

  return (
    <>
      <h1>JSON &lt;--&gt; CSV</h1>
      <TextAreaForm
        formID="json-form"
        submitCallback={handleJSONSubmit}
        changeCallback={handleJSONChange}
        textAreaName="json"
        textAreaID="json-box"
        textAreaExample={JSON.stringify(jsonExample)}
      />

      <TextAreaForm
        formID="csv-form"
        submitCallback={handleCSVSubmit}
        changeCallback={handleCSVChange}
        textAreaName="csv"
        textAreaID="csv-box"
        textAreaExample={CSVExample}
        textAreaValue={CSV}
      />
    </>
  );
}

export default App;
