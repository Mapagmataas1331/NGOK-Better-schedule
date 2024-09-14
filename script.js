// Constants for API and sheet access
const sheetId = "1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc";
const apiKey = "AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo";

// DOM elements
const elements = {
  yearSelect: document.getElementById("yearSelect"),
  groupSelect: document.getElementById("groupSelect"),
  dateSelect: document.getElementById("dateSelect"),
  scheduleDiv: document.getElementById("schedule"),
  groupContainer: document.getElementById("groupContainer"),
  dateContainer: document.getElementById("dateContainer"),
};

let selectedSheet = null;
let selectedGroup = null;
let selectedDate = new Date().toLocaleDateString("ru-RU", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Asia/Novosibirsk",
});

// Helper: Build the API URL
function buildUrl(sheetName) {
  if (!sheetName) throw new Error("Курс не может быть пустым!");
  return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
    sheetName
  )}?key=${apiKey}`;
}

// Helper: Get full week from a Monday date string
function getFullWeek(mondayStr) {
  const [day, month, year] = mondayStr.split(".").map(Number);
  const monday = new Date(year, month - 1, day);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
  });
}

// Helper: Get day of the week for a date string
function getDayOfWeek(dateStr) {
  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const [day, month, year] = dateStr.split(".").map(Number);
  const date = new Date(year, month - 1, day);
  return daysOfWeek[date.getDay()] || "Неизвестный день!";
}

// Fetch data from Google Sheets API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 403) throw new Error("Недействительный API-ключ.");
    if (response.status === 404) throw new Error("Данные не найдены.");
    if (!response.ok) throw new Error("Ошибка сети. Повторите попытку позже.");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error.message);
    elements.scheduleDiv.innerHTML = `<p aria-live="polite">Ошибка загрузки данных: ${error.message}</p>`;
    return null;
  }
}

// Populate a select element with options
function populateSelect(selectElement, data, defaultOption = "Выберите вариант", values = false) {
  selectElement.innerHTML = `<option value="null">${defaultOption}</option>`;
  Object.keys(data).forEach((key) => {
    const optionText = values ? data[key] : key;
    const option = new Option(optionText, key);
    selectElement.add(option);
  });
}

// Build schedule table dynamically
function buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace) {
  if (!schedule || !params || !selectedGroup || selectedDate == "") {
    elements.scheduleDiv.innerHTML = "<p>Некорректные данные!</p>";
    return;
  }

  const today = new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Novosibirsk",
  });

  const dates = selectedDate ? [selectedDate] : getFullWeek(curWeek);
  const scheduleTable = dates
    .map((date) => {
      const dayOfWeek = getDayOfWeek(date);
      const isStudyDay = studyDates[date] !== undefined;

      let headerClass = date === today ? "today schedule-header" : "schedule-header";
      headerClass = !isStudyDay ? "day-off schedule-header" : headerClass;

      let tableRows = `<tr class="${headerClass}"><td>${date}</td><td>${dayOfWeek}</td></tr>`;

      if (isStudyDay) {
        for (let i = studyDates[date]; i < studyDates[date] + scheduleSpace; i++) {
          const discipline = schedule[i][params["Дисциплины"]];
          const auditorium = schedule[i][params["Ауд."]];

          if (discipline) {
            const auditoriumContent =
              auditorium && auditorium.startsWith("http") ? `<a href="${auditorium}">Онлайн</a>` : auditorium || "";

            tableRows += `
              <tr>
              <td class="time">${schedule[i] && schedule[i][params["Часы"]] ? schedule[i][params["Часы"]] : ""}</td>
              <td class="discipline">${discipline}</td>
              </tr><tr>
              <td class="auditorium">${auditoriumContent}</td>
              <td class="teacher">${
                schedule[i] && schedule[i][params["Преподаватели"]] ? schedule[i][params["Преподаватели"]] : ""
              }</td>
              </tr>
            `;
          }
        }
      } else {
        tableRows += "<tr><td colspan='2' class='no-classes'>Выходной</td></tr>";
      }

      return `<table class="schedule-table">${tableRows}</table><br/>`;
    })
    .join("");

  elements.scheduleDiv.innerHTML = scheduleTable;
  elements.scheduleDiv.style.display = "block";
}

// Main logic for year selection
async function handleYearChange() {
  selectedSheet = elements.yearSelect.value;
  resetSelection(true);
  if (selectedSheet == null) return;

  const url = buildUrl(selectedSheet);
  const data = await fetchData(url);
  if (!data || !data.values) {
    elements.scheduleDiv.innerHTML = "Нет данных для отображения.";
    return;
  }

  const schedule = data.values;
  const curWeek = schedule[0][0].match(/\b(\d{2}\.\d{2}\.\d{4})\b/)[0];
  const params = extractParams(schedule);

  if (!params["Дата"] || !params["Часы"]) {
    console.error("Не найдены все параметры!");
    return;
  }

  const timeIntervals = extractTimeIntervals(schedule, params);
  const curGroups = extractGroups(schedule);
  const scheduleSpace = Object.keys(timeIntervals).length;

  populateSelect(elements.groupSelect, curGroups, "Выберите свою группу:");
  elements.groupContainer.style.display = "block";

  handleGroupChange(schedule, params, scheduleSpace, curGroups, curWeek);
}

// Reset selections
function resetSelection(ifGroup = false) {
  elements.scheduleDiv.style.display = "none";
  if (selectedGroup == "null") {
    selectedGroup = null;
    selectedDate = new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
    elements.dateContainer.style.display = "none";
  }
  if (ifGroup) {
    selectedDate = new Date().toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
    elements.dateContainer.style.display = "none";
    selectedGroup = null;
    elements.groupContainer.style.display = "none";
    if (selectedSheet == "null") selectedSheet = null;
  }
}

// Handle group change logic
function handleGroupChange(schedule, params, scheduleSpace, curGroups, curWeek) {
  elements.groupSelect.addEventListener("change", () => {
    selectedGroup = elements.groupSelect.value;
    resetSelection();
    if (selectedGroup == null) return;

    const updatedParams = extractUpdatedParams(schedule, curGroups);
    Object.assign(params, updatedParams);

    const allDates = extractDates(schedule, params);
    const studyDates = filterStudyDates(schedule, allDates, scheduleSpace, params);
    const formattedDates = formatDates(allDates, studyDates);

    populateSelect(elements.dateSelect, formattedDates, "Показать неделю с " + curWeek, true);
    if (Object.keys(studyDates).includes(selectedDate)) {
      elements.dateSelect.value = selectedDate;
    }

    elements.dateContainer.style.display = "block";

    elements.dateSelect.addEventListener("change", () => {
      selectedDate = elements.dateSelect.value !== "null" ? elements.dateSelect.value : null;
      buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace);
    });

    buildSchedule(schedule, params, studyDates, curWeek, scheduleSpace);
  });
}

// Extracts column parameters from the schedule data
function extractParams(schedule) {
  return schedule[1].reduce((acc, cell, index) => {
    if (cell) acc[cell] = index;
    return acc;
  }, {});
}

// Extracts the time intervals from the schedule data
function extractTimeIntervals(schedule, params) {
  return schedule.reduce((acc, row, index) => {
    const cell = row[params["Часы"]];
    if (index > 1 && cell && /\b(\d{2}\.\d{2}-\d{2}\.\d{2})\b/.test(cell)) {
      acc[cell] = index;
    }
    return acc;
  }, {});
}

// Extracts the groups from the schedule data
function extractGroups(schedule) {
  return schedule[0].reduce((acc, cell, index) => {
    if (index !== 0 && cell) acc[cell] = index;
    return acc;
  }, {});
}

// Extracts updated parameters based on the selected group
function extractUpdatedParams(schedule, curGroups) {
  return schedule[1].reduce((acc, cell, index) => {
    if (index >= curGroups[selectedGroup] && !acc[cell]) {
      acc[cell] = index;
    }
    return acc;
  }, {});
}

// Extracts all possible dates from the schedule
function extractDates(schedule, params) {
  return schedule.reduce((acc, row, index) => {
    const dateCell = row[params["Дата"]];
    if (index > 1 && dateCell && /\b(\d{2}\.\d{2}\.\d{4})\b/.test(dateCell)) {
      acc[dateCell] = index;
    }
    return acc;
  }, {});
}

// Filters the study dates based on the presence of schedule data
function filterStudyDates(schedule, allDates, scheduleSpace, params) {
  return Object.entries(allDates).reduce((acc, [date, index]) => {
    for (let i = index; i < index + scheduleSpace; i++) {
      if (schedule[i][params["Дисциплины"]]) acc[date] = index;
    }
    return acc;
  }, {});
}

// Formats the dates for display in the date selector
function formatDates(allDates, studyDates) {
  return Object.entries(allDates).reduce((acc, [date, index]) => {
    let study = studyDates[date] ? "" : " (Вых.)";
    let today = date === selectedDate ? " (Сег.)" : "";
    acc[date] = date + study + today;
    return acc;
  }, {});
}

// Event listeners
elements.yearSelect.addEventListener("change", handleYearChange);

window.onload = () => {
  elements.yearSelect.value = "null";
};
