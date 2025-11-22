import { useState } from "react";
import "./App.css";
import TextAreaForm from "./components/TextAreaForm";
import FileInput from "./components/FileInput";
import { jsonExample, validateJSON, handleJSON } from "./utils/json_handler";
import { CSVExample, validateCSV, handleCSV } from "./utils/csv_handler";

function App() {
  const [jsonValue, setJSONValue] = useState("");
  const [CSV, setCSV] = useState("");

  function handleJSONSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;

    setCSV(handleJSON(jsonData));
  }

  function handleJSONChange(e) {
    setJSONValue(e.target.value);
  }

  function handleCSVSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const CSVData = Object.fromEntries(formData.entries()).csv;

    setJSONValue(JSON.stringify(handleCSV(CSVData)));
  }

  function handleCSVChange(e) {
    setCSV(e.target.value);
  }

  return (
    <>
      <h1>JSON &lt;--&gt; CSV</h1>
      <TextAreaForm
        formID="json-form"
        textAreaName="json"
        textAreaID="json-box"
        textAreaExample={JSON.stringify(jsonExample)}
        textAreaValue={jsonValue}
        submitCallback={handleJSONSubmit}
        changeCallback={handleJSONChange}
        buttonCondition={validateJSON}
      />
      <FileInput buttonText="Choose JSON File" inputID="json-file" />

      <TextAreaForm
        formID="csv-form"
        textAreaName="csv"
        textAreaID="csv-box"
        textAreaExample={CSVExample}
        textAreaValue={CSV}
        submitCallback={handleCSVSubmit}
        changeCallback={handleCSVChange}
        buttonCondition={validateCSV}
      />
      <FileInput buttonText="Choose CSV File" inputID="csv-file" />
    </>
  );
}

export default App;
