import process from "process";

process.addListener("exit", (exitCode) => {
  console.info(`NodeJs exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);

// process.exit(1) perintah berhenti
