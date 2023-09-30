import cluster from "cluster";
import os from "os";
import process from "process";
import http, { request } from "http";

if (cluster.isPrimary) {
  // jalankan worker
  console.info(`Primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.addListener("exit", (worker) => {
    console.info(`Worker-${worker.id} is exit`);
    cluster.fork(); // menjalankan cluster tetap menyala jika tidak pakai ini maka aplikasi akan mati
  });
}

if (cluster.isWorker) {
  console.info(`Worker : ${process.pid}`);

  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    response.exit();
  });

  server.listen(3000);
}
