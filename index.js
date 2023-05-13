const faker = require("faker");
const fs = require("fs");

faker.locale = "id_ID";
const data = { students: [] };

for (let a = 1; a <= 200; a++) {
  data.students.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  });
}

fs.writeFileSync("db.json", JSON.stringify(data));
