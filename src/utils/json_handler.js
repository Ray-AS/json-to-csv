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

function validateItem(item) {
  if (
    typeof item !== "object" ||
    Object.keys(item).length === 0 ||
    Array.isArray(item)
  )
    return false;
  return true;
}

function joinKeys(item) {
  const keys = Object.keys(item).sort();
  return keys.join("-");
}

function validateJSON(jsonData) {
  try {
    jsonData = JSON.parse(jsonData);
  } catch {
    return false;
  }

  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return false;
  }

  if (!validateItem(jsonData[0])) {
    return false;
  }

  const keyString = joinKeys(jsonData[0]);

  for (let item of jsonData) {
    if (!validateItem(item)) {
      return false;
    }

    if (joinKeys(item) !== keyString) {
      return false;
    }
  }

  return true;
}

function convertToCSV(jsonData) {
  jsonData = JSON.parse(jsonData);

  const headers = Object.keys(jsonData[0]);
  const lines = [headers];

  for (let item of jsonData) {
    lines.push(Object.values(item));
  }

  let CSV_string = "";

  for (let line of lines) {
    CSV_string += line.join(",");
    CSV_string += "\n";
  }

  return CSV_string.slice(0, -1);
}

function handleJSON(jsonData) {
  // if (!validateJSON(jsonData)) {
  //   console.log("Invalid data");
  //   return "";
  // }

  return convertToCSV(jsonData);
}

export { jsonExample, validateJSON, handleJSON };
