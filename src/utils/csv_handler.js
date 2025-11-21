const CSVExample = "Key,Key2\n" + "value,value2\n" + "value3,value4\n";

function validateItems(items) {
  if (items.some((item) => item === "" || item === null)) {
    return false;
  }
  return true;
}

function formatLine(line) {
  return line.split(",").map((cell) => cell.trim());
}

function validateCSV(CSVData) {
  if (CSVData === "" || CSVData === null) {
    return false;
  }

  CSVData = CSVData.split("\n");

  if (CSVData.length <= 1) {
    return false;
  }

  let headers = formatLine(CSVData[0]);
  if (!validateItems(headers)) {
    return false;
  }

  for (let line of CSVData) {
    let cells = formatLine(line);

    if (cells.length != headers.length) {
      return false;
    }

    if (!validateItems(cells)) {
      return false;
    }
  }

  return true;
}

function convertToJSON(CSVData) {
  CSVData = CSVData.split("\n");
  let headers = formatLine(CSVData[0]);
  CSVData.shift();

  const converted = [];

  for (let line of CSVData) {
    let cells = formatLine(line);

    const item = {};

    for (let i in headers) {
      item[headers[i]] = cells[i];
    }

    converted.push(item);
  }

  return converted;
}

function handleCSV(CSVData) {
  return convertToJSON(CSVData);
}

export { CSVExample, validateCSV, handleCSV };
