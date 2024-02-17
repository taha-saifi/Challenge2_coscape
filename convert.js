const fs = require("fs");
const csv = require("csv-parser");

function csvToJson(csvFilePath, jsonFilePath) {
  const jsonArray = {data:[]};

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (row) => {
      jsonArray.data.push(row);
    })
    .on("end", () => {
      // Write JSON data to file
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, 4));
      console.log("CSV file successfully converted to JSON.");
    });
}

// Usage example

const csvFilePath = "./Walmart_sales.csv"; // path to your CSV file
const jsonFilePath = "output.json"; // path for output JSON file

csvToJson(csvFilePath, jsonFilePath);