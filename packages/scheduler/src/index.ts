import { helloMongo } from "mongo";

const greet = helloMongo({ name: "dany" });

console.log(greet);
