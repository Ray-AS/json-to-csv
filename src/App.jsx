// import { useState } from "react";
import "./App.css";
import Textbox from "./components/Textbox";
import TextAreaForm from "./components/TextAreaForm";
import { jsonExample, handleJSON } from "./utils/json_handler";
import { CSVExample, handleCSV } from "./utils/csv_handler";

function App() {
  function handleJSONSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;

    handleJSON(jsonData);
  }

  function handleCSVSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const CSVData = Object.fromEntries(formData.entries()).csv;

    handleCSV(CSVData);
  }

  return (
    <>
      <h1>JSON &lt;--&gt; CSV</h1>
      <TextAreaForm
        formID="json-form"
        callback={handleJSONSubmit}
        textAreaName="json"
        textAreaID="json-box"
        textAreaExample={JSON.stringify(jsonExample)}
      />

      <TextAreaForm
        formID="csv-form"
        callback={handleCSVSubmit}
        textAreaName="csv"
        textAreaID="csv-box"
        textAreaExample={CSVExample}
      />
    </>
  );
}

export default App;
