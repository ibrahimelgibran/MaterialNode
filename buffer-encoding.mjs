const buffer = Buffer.from("Ibrahim El Gibran", "utf8");

buffer.reverse(); // jika tidak pakai ini maka nama menjadi normal tidak kebalik
console.info(buffer.toString());

console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("SWJyYWhpbSBFbCBHaWJyYW4=", "base64");
console.info(bufferBase64.toString("utf8"));
