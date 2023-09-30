import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

client.addListener("data", (data) => {
  console.info(`Reveive data from server : ${data.toString()}`);
});

setInterval(() => {
  client.write("Elgibran\r\n");
}, 2000);

// setInterval(() => {
// client.write(`${process.argv[2]}\r\n`);
// }, 2000); jika 3 terminal dengan tambhan nama bisa pakai ini
