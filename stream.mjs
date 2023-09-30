import fs from "fs";

const writer = fs.createWriteStream("target.log"); // seperti membuat file lalu dengan nama target.log

writer.write("Ibrahim\n"), // membuat isi file
  writer.write("El\n"),
  writer.write("Gibran\n"),
  writer.end();

const reader = fs.createReadStream("target.log"); // untuk membaca isi file dari writer.write
reader.addListener("data", (data) => {
  console.info(data.toString());
}); // menampilkan dengan buffer
