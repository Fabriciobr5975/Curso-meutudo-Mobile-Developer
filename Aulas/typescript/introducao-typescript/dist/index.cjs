"use strict";

// src/index.ts
function main() {
  for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 0; j <= 10; j++) {
      console.log(`${j} x ${i} = ${i * j}`);
    }
    console.log("\n");
  }
}
main();
