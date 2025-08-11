function main() {
    for(let i: number = 1; i <= 10; i++) {
         console.log(`Tabuada do ${i}:`);
        for(let j: number = 0; j <= 10; j++) {
            console.log(`${j} x ${i} = ${i * j}`);
        }
        console.log("\n");
    }
}

main();