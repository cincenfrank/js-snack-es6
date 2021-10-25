const teamsArray = [
  { name: "pippo", points: 0, fouls: 0 },
  { name: "pluto", points: 0, fouls: 0 },
  { name: "paperino", points: 0, fouls: 0 },
  { name: "paperoga", points: 0, fouls: 0 },
  { name: "banda bassotti", points: 0, fouls: 0 },
  { name: "paperone", points: 0, fouls: 0 },
  { name: "gamba di legno", points: 0, fouls: 0 },
  { name: "gastone", points: 0, fouls: 0 },
  { name: "minnie", points: 0, fouls: 0 },
  { name: "paperina", points: 0, fouls: 0 },
  { name: "topolino", points: 0, fouls: 0 },
  { name: "qui", points: 0, fouls: 0 },
  { name: "quo", points: 0, fouls: 0 },
  { name: "qua", points: 0, fouls: 0 },
];
const rankTable = document.getElementById("rank-table");
const foulsTable = document.getElementById("fouls-table");

generateData();
const foulsArray = generateFoulsArray(teamsArray);
console.log("Teams Array", teamsArray);
console.log("Fouls Array", foulsArray);
generateTable(teamsArray, rankTable);
generateTable(foulsArray, foulsTable);

function generateTable(inputArray, htmlTable) {
  htmlTable.innerHTML = "";
  let headerRows = `<thead><tr><th scope="col">#</th>`;
  for (const key in inputArray[0]) {
    headerRows += `<th scope="col">${key}</th>`;
  }
  headerRows += `</tr></thead>`;

  let bodyRows = `<tbody>`;
  for (let i = 0; i < inputArray.length; i++) {
    bodyRows += ` <tr>
      <th scope="row">${i + 1}</th>`;
    for (const key in inputArray[i]) {
      bodyRows += `<td>${inputArray[i][key]}</td>`;
    }
    bodyRows += `</tr>`;
  }
  bodyRows += `</tbody>`;
  htmlTable.innerHTML = headerRows + bodyRows;
}

function generateData() {
  for (let i = 0; i < teamsArray.length; i++) {
    teamsArray[i].fouls = generateRandomNumberBetween(0, 100);
    teamsArray[i].points = generateRandomNumberBetween(0, 200);
  }
  teamsArray.sort((a, b) => b.points - a.points);
}

function generateFoulsArray(teamsArray) {
  const newArray = [];
  for (let i = 0; i < teamsArray.length; i++) {
    const { name, fouls } = teamsArray[i];
    newArray.push({ name, fouls });
  }
  newArray.sort((a, b) => b.fouls - a.fouls);
  return newArray;
}

/**
 *  returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function generateRandomNumberBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
