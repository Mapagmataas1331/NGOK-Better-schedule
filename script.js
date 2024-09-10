const sheetId = "1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc";
const apiKey = "AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo";

const weekHeader = document.getElementById("weekHeader");
const yearContainer = document.getElementById("yearContainer");
const yearSelect = document.getElementById("yearSelect");
const groupContainer = document.getElementById("groupContainer");
const groupSelect = document.getElementById("groupSelect");
const dateContainer = document.getElementById("dateContainer");
const dateSelect = document.getElementById("dateSelect");

var selectedSheat = null;
var selectedGroup = null;
var selectedDate = null;

function buildUrl(sheetName) {
  if (!sheetName) {
    throw new Error("Курс не может быть пустым!");
  }

  return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
    sheetName
  )}?key=${apiKey}`;
}

yearSelect.addEventListener("change", () => {
  selectedSheat = yearSelect.value;
  fetch(buildUrl(selectedSheat))
    .then((response) => response.json())
    .then((data) => {
      const scheduleDiv = document.getElementById("schedule");
      const values = data.values;

      if (!values) {
        scheduleDiv.innerHTML = "Нет данных для отображения.";
        return;
      }

      console.log("schedule[row/строка][col/столбец]");

      let schedule = {};

      values.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (!schedule[rowIndex]) {
            schedule[rowIndex] = {};
          }
          schedule[rowIndex][colIndex] = cell;
        });
      });

      console.log("schedule:", schedule);

      let curWeek = schedule[0][0].match(/\b(\d{2}\.\d{2}\.\d{4})\b/)[0];
      weekHeader.innerHTML = "Расписание на неделю с " + curWeek;

      console.log("curWeek:", curWeek);

      let curGroups = {};

      for (const col in schedule[0]) {
        let cell = schedule[0][col];
        if (col != 0 && cell != "" && cell != undefined) curGroups[cell] = col;
      }

      console.log("curGroups:", curGroups);

      groupSelect.innerHTML = '<option value="null">Выберите вариант</option>';
      for (const group in curGroups) {
        groupSelect.innerHTML += `<option value="${group}">${group}</option>`;
      }
      groupContainer.style.display = "block";

      let table = "<table>";

      for (const row in schedule) {
        table += "<tr>";
        for (const col in schedule[row]) {
          if (row <= 2 || row >= 40) table += `<td>row${row} col${col}: ${schedule[row][col]}</td>`;
        }
        table += "</tr>";
      }

      table += "</table>";

      scheduleDiv.innerHTML = table;
    })
    .catch((error) => console.error("Error:", error));
});
