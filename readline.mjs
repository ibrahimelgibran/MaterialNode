import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa namma anda?", (name) => {
  console.info(`Hallo ${name}`);
  input.close(); // tanpa ini juga bisa, dan saat dipakai kemudian diam sampai "Hallo Gibran" seesudah mengisi
});
