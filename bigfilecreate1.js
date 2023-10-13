const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big1.txt", `hello world ${i}\n`, { flag: "a" });
}
