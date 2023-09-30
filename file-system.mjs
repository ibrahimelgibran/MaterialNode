import fs from "fs/promises";

const butter = await fs.readFile("file-system.mjs");

console.info(butter.toString());

await fs.writeFile("temp.txt", "Hello World");
