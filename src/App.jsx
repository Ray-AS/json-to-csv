import { useState } from "react";
import "./App.css";
import TextAreaForm from "./components/TextAreaForm";
import FileInput from "./components/FileInput";
import { jsonExample, validateJSON, handleJSON } from "./utils/json_handler";
import { CSVExample, validateCSV, handleCSV } from "./utils/csv_handler";

function App() {
  const [jsonValue, setJSONValue] = useState("");
  const [CSV, setCSV] = useState("");

  function handleChange(setter) {
    return (e) => setter(e.target.value);
  }

  function handleFile(callback) {
    return (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => callback(event.target.result);
      reader.readAsText(file);
    };
  }

  function handleJSONSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;

    setCSV(handleJSON(jsonData));
  }

  function handleCSVSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const CSVData = Object.fromEntries(formData.entries()).csv;

    setJSONValue(JSON.stringify(handleCSV(CSVData)));
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
        changeCallback={handleChange(setJSONValue)}
        buttonCondition={validateJSON}
      />
      <FileInput
        buttonText="Choose JSON File"
        inputID="json-file"
        accept=".json"
        fileCallback={handleFile((data) => console.log(data))}
      />

      <TextAreaForm
        formID="csv-form"
        textAreaName="csv"
        textAreaID="csv-box"
        textAreaExample={CSVExample}
        textAreaValue={CSV}
        submitCallback={handleCSVSubmit}
        changeCallback={handleChange(setCSV)}
        buttonCondition={validateCSV}
      />
      <FileInput
        buttonText="Choose CSV File"
        inputID="csv-file"
        accept=".csv"
        fileCallback={handleFile((data) => console.log(data))}
      />
    </>
  );
}

export default App;
