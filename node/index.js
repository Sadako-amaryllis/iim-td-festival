const lib = require("../index.js");

async function main() {
    const x = await lib.getFestivalApi()
    console.log('ici',x)   
}

main()