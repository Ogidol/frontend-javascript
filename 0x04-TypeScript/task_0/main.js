var student1 = {
    firstName: "Idris",
    lastName: "Ogundele",
    age: 12,
    location: "Ibadan",
};
var student2 = {
    firstName: "Hiqmah",
    lastName: "Ogundele",
    age: 13,
    location: "Ogbomoso",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = table.insertRow();
var header1 = document.createElement("th");
header1.textContent = "firstName";
headerRow.appendChild(header1);
var header2 = document.createElement("th");
header2.textContent = "location";
headerRow.appendChild(header2);
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
