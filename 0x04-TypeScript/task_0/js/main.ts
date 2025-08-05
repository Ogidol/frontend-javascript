interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Idris",
  lastName: "Ogundele",
  age: 12,
  location: "Ibadan",
};

const student2: Student = {
  firstName: "Hiqmah",
  lastName: "Ogundele",
  age: 13,
  location: "Ogbomoso",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();

const header1 = document.createElement("th");
header1.textContent = "firstName";
headerRow.appendChild(header1);

const header2 = document.createElement("th");
header2.textContent = "location";
headerRow.appendChild(header2);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = Student.firstName;
  locationCell.textContent = Student.location;
});

document.body.appendChild(table);

