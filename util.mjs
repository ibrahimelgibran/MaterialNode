import util from "util";

const firstName = "Ibrahim";
const lastName = "El Gibran";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

// lebih menarik pakai json
const person = {
  firstName: "Elgibran",
  lastName: "Ibrahim",
};

console.info(`person : ${JSON.stringify(person)}`);
console.info(util.format("person : %j", person));
