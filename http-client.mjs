import https from "https";

const endpoint = "https://eofr0nu3405q931.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/jsoon",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Ibrahim",
  lastName: "ElGibran",
});

request.write(body);
request.end();
