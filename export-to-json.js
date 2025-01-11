const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

// Відкриваємо базу даних
let db = new sqlite3.Database(
  "./assets/db.sqlite",
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log("Connected to the SQLite database.");
  }
);

// Функція для експорту даних у JSON
db.serialize(() => {
  db.all("SELECT * FROM vc_milling", [], (err, rows) => {
    // name table
    if (err) {
      throw err;
    }

    // Зберігаємо дані у JSON-файл
    fs.writeFileSync(
      "./assets/db_vc_milling.json",
      JSON.stringify(rows, null, 2),
      "utf8"
    );
    console.log("Data has been written to data.json");
  });
});

// Закриваємо базу даних після завершення операцій
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});

// node export-to-json.js
