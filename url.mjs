import { URL } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.ibrahimelgibran.com";
pzn.searchParams.append("Status", "Premium");

console.info(pzn.toString);
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
