import { readFileSync, writeFileSync } from "fs";

const loadBooks = () => {
  try {
    let jsonString = readFileSync("./datasource/data.json", "utf8"); // (File Source, Encoding)
    let obj = JSON.parse(jsonString);
    // const books = JSON.parse(readFileSync("data/books.json")); OR DO IT IN ONE LINE
    return obj;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const saveBooks = (data) => {
  try {
    writeFileSync("./datasource/data.json", JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

export { loadBooks, saveBooks };
