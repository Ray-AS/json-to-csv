import { useState } from "react";
import "./App.css";
import TextAreaForm from "./components/TextAreaForm";
import FileInput from "./components/FileInput";
import Export from "./components/Export";
import { jsonExample, validateJSON, handleJSON } from "./utils/json_handler";
import { CSVExample, validateCSV, handleCSV } from "./utils/csv_handler";

function App() {
  const [jsonValue, setJSONValue] = useState("");
  const [CSV, setCSV] = useState("");
  const [jsonURL, setJSONURL] = useState("");
  const [csvURL, setCSVURL] = useState("");

  function handleChange(setter, type) {
    return (e) => {
      if (type === "json" && validateJSON(e.target.value)) {
        setJSONURL(
          handleExport(
            JSON.stringify(JSON.parse(e.target.value), null, 2),
            "application/json"
          )
        );
      } else if (type === "csv" && validateCSV(e.target.value)) {
        setCSVURL(handleExport(e.target.value, "text/csv"));
      }

      setter(e.target.value);
    };
  }

  function handleFile(validate, setter) {
    return (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        if (validate(event.target.result)) {
          setter(event.target.result);
        }
      };
      reader.readAsText(file);
    };
  }

  function handleExport(data, type) {
    const blob = new Blob([data], { type: type });
    const url = URL.createObjectURL(blob);

    return url;
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
        changeCallback={handleChange(setJSONValue, "json")}
        buttonCondition={validateJSON}
      />
      <FileInput
        buttonText="Choose JSON File"
        inputID="json-file"
        accept=".json"
        fileCallback={handleFile(validateJSON, setJSONValue)}
      />
      <Export
        data={jsonValue}
        buttonCondition={validateJSON}
        url={jsonURL}
        download="json_export.json"
        exportText="Export JSON Data"
      />

      <TextAreaForm
        formID="csv-form"
        textAreaName="csv"
        textAreaID="csv-box"
        textAreaExample={CSVExample}
        textAreaValue={CSV}
        submitCallback={handleCSVSubmit}
        changeCallback={handleChange(setCSV, "csv")}
        buttonCondition={validateCSV}
      />
      <FileInput
        buttonText="Choose CSV File"
        inputID="csv-file"
        accept=".csv"
        fileCallback={handleFile(validateCSV, setCSV)}
      />
      <Export
        data={CSV}
        buttonCondition={validateCSV}
        url={csvURL}
        download="csv_export.csv"
        exportText="Export CSV Data"
      />
    </>
  );
}

export default App;
