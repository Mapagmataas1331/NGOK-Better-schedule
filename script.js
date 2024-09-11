const sheetId = "1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc";
const apiKey = "AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo";

// DOM elements
const yearContainer = document.getElementById("yearContainer");
const yearSelect = document.getElementById("yearSelect");
const groupContainer = document.getElementById("groupContainer");
const groupSelect = document.getElementById("groupSelect");
const dateContainer = document.getElementById("dateContainer");
const dateSelect = document.getElementById("dateSelect");
const scheduleDiv = document.getElementById("schedule");

let todayDate = new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
let selectedSheet = null;
let selectedGroup = null;
let selectedDate = todayDate;

// Helper to build the API URL
function buildUrl(sheetName) {
  if (!sheetName) throw new Error("Курс не может быть пустым!");
  return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
    sheetName
  )}?key=${apiKey}`;
}

// Helper to get the week from a Monday
function getFullWeek(mondayStr) {
  const [day, month, year] = mondayStr.split(".").map(Number);
  const monday = new Date(year, month - 1, day);

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  });
}

// Helper to get day of the week
function getDayOfWeek(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);
  const date = new Date(year, month - 1, day);
  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  return daysOfWeek[date.getDay()] || "Неизвестный день!";
}

// Fetch data from the Google Sheets API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка при получении данных. Проверьте ключ API.");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    return null;
  }
}

// Populate a select element with options
function populateSelect(selectElement, data, defaultOption = "Выберите вариант", values = false) {
  selectElement.innerHTML = `<option value="null">${defaultOption}</option>`;
  Object.keys(data).forEach((key) => {
    const optionText = values ? data[key] : key;
    selectElement.innerHTML += `<option value="${key}">${optionText}</option>`;
  });
}

// Build schedule from the data
function buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace) {
  scheduleDiv.innerHTML = (() => {
    if (!schedule || Object.keys(schedule).length === 0) {
      return "<p>Расписание пустое!</p>";
    }

    if (!params || Object.keys(params).length === 0) {
      return "<p>Параметры не найдены!</p>";
    }

    if (!selectedGroup || selectedGroup.length === 0) {
      return "<p>Группа не найдена!</p>";
    }

    if (selectedDate == "") {
      return "<p>Дата не найдена!</p>";
    }

    let dates = [selectedDate];

    if (selectedDate == null) {
      dates = getFullWeek(curWeek);
    }

    let result = "";

    for (let i = 0; i < dates.length; i++) {
      result += "<table>";

      result += "<tr>";
      result += "<td>" + dates[i] + "</td>";
      result += "<td>" + getDayOfWeek(dates[i]) + "</td>";
      result += "</tr>";
      if (!studyDates[dates[i]]) {
        result += "<tr><td>Выходной</td></tr>";
      } else {
        for (let j = studyDates[dates[i]]; j < studyDates[dates[i]] + scheduleSpace; j++) {
          if (schedule[j][params["Дисциплины"]] != "" && schedule[j][params["Дисциплины"]] != undefined) {
            result += "<tr>";
            result += "<td>" + schedule[j][params["Часы"]] + "</td>";
            result += "<td>" + schedule[j][params["Дисциплины"]] + "</td>";
            result += "</tr>";
            result += "<tr>";
            result += "<td>" + schedule[j][params["Преподаватели"]] + "</td>";
            result += "<td>" + schedule[j][params["Ауд."]] + "</td>";
            result += "</tr>";
          }
        }
      }
      // schedule.forEach((row, rowIndex) => {
      //   if (rowIndex >= 2 && rowIndex <= 38) {
      //     result += "<tr>";
      //     row.forEach((cell, colIndex) => {
      //       result += `<td>row${rowIndex} col${colIndex}: ${cell}</td>`;
      //     });
      //     result += "</tr>";
      //   }
      // });
      result += "</table><br/>";
    }

    return result;
  })();

  scheduleDiv.style.display = "block";
}

// Main logic for handling schedule data and selections
async function handleYearChange() {
  selectedSheet = yearSelect.value;

  if (selectedSheet === "null") {
    selectedSheet = null;
    groupContainer.style.display = "none";
    dateContainer.style.display = "none";
    scheduleDiv.style.display = "none";
    return;
  }

  const url = buildUrl(selectedSheet);
  const data = await fetchData(url);
  if (!data || !data.values) {
    scheduleDiv.innerHTML = "Нет данных для отображения.";
    return;
  }

  const schedule = data.values;
  console.log("Полученные данные расписания:", schedule);

  const curWeek = schedule[0][0].match(/\b(\d{2}\.\d{2}\.\d{4})\b/)[0];

  const params = extractParams(schedule);
  if (!params["Дата"] || !params["Часы"]) {
    console.error("Не найдены все параметры!");
    return;
  }

  const timeIntervals = extractTimeIntervals(schedule, params);
  const scheduleSpace = Object.keys(timeIntervals).length;
  const curGroups = extractGroups(schedule);

  populateSelect(groupSelect, curGroups, "Выберите свою группу:");
  groupContainer.style.display = "block";

  handleGroupChange(schedule, params, scheduleSpace, curGroups, curWeek);
}

function extractParams(schedule) {
  return schedule[1].reduce((acc, cell, index) => {
    if (cell) acc[cell] = index;
    return acc;
  }, {});
}

function extractTimeIntervals(schedule, params) {
  return schedule.reduce((acc, row, index) => {
    const cell = row[params["Часы"]];
    if (acc[cell]) return acc;
    if (index > 1 && cell && /\b(\d{2}\.\d{2}-\d{2}\.\d{2})\b/.test(cell)) acc[cell] = index;
    return acc;
  }, {});
}

function extractGroups(schedule) {
  return schedule[0].reduce((acc, cell, index) => {
    if (index !== 0 && cell) acc[cell] = index;
    return acc;
  }, {});
}

function handleGroupChange(schedule, params, scheduleSpace, curGroups, curWeek) {
  groupSelect.addEventListener("change", () => {
    selectedGroup = groupSelect.value;

    if (selectedGroup === "null") {
      selectedGroup = null;
      dateContainer.style.display = "none";
      scheduleDiv.style.display = "none";
      return;
    }

    const updatedParams = extractUpdatedParams(schedule, curGroups);
    Object.assign(params, updatedParams);

    const allDates = extractDates(schedule, params);
    const studyDates = filterStudyDates(schedule, allDates, scheduleSpace, params);
    const formattedDates = formatDates(allDates, studyDates);

    populateSelect(dateSelect, formattedDates, "Показать неделю с " + curWeek, true);
    if (Object.keys(allDates).includes(todayDate)) {
      dateSelect.value = todayDate;
    }
    dateContainer.style.display = "block";

    dateSelect.addEventListener("change", () => {
      selectedDate = dateSelect.value;
      if (selectedDate === "null") {
        selectedDate = null;
      }
      buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace);
    });

    buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace);
  });
}

function extractUpdatedParams(schedule, curGroups) {
  return schedule[1].reduce((acc, cell, index) => {
    if (index >= curGroups[selectedGroup] && !acc[cell]) {
      acc[cell] = index;
    }
    return acc;
  }, {});
}

function extractDates(schedule, params) {
  return schedule.reduce((acc, row, index) => {
    const dateCell = row[params["Дата"]];
    if (index > 1 && dateCell && /\b(\d{2}\.\d{2}\.\d{4})\b/.test(dateCell)) {
      acc[dateCell] = index;
    }
    return acc;
  }, {});
}

function filterStudyDates(schedule, allDates, scheduleSpace, params) {
  return Object.entries(allDates).reduce((acc, [date, index]) => {
    for (let i = index; i < index + scheduleSpace; i++) {
      if (schedule[i][params["Дисциплины"]]) acc[date] = index;
    }
    return acc;
  }, {});
}

function formatDates(allDates, studyDates) {
  return Object.entries(allDates).reduce((acc, [date, index]) => {
    let study = studyDates[date] ? "" : " (Вых.)";
    let today = date === todayDate ? " (Сег.)" : "";
    acc[date] = date + study + today;
    return acc;
  }, {});
}

// Event listeners
yearSelect.addEventListener("change", handleYearChange);
