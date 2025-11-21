import { useState } from "react";
import "./App.css";
import Textbox from "./components/Textbox";
import TextAreaForm from "./components/TextAreaForm";
import { jsonExample, handleJSON } from "./utils/json_validation";

function App() {
  const CSVExample = "Key,Key2\n" + "value,value2\n" + "value3,value4\n";
  const [CSV, setCSV] = useState(CSVExample);

  function handleJSONSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData.entries()).json;

    handleJSON(jsonData)
  }

  return (
    <>
      <h1>JSON -&gt; CSV</h1>
      <TextAreaForm
        formID="json-form"
        callback={handleJSONSubmit}
        textAreaName="json"
        textAreaID="json-box"
        textAreaExample={JSON.stringify(jsonExample)}
      />
      <Textbox name="csv" id="csv-box" placeholder={CSV} />
    </>
  );
}

export default App;
