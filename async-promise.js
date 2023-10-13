// if we want to read multiple files and write a single file so we will turn readFile into the promise

const { readFile,writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mindgrenade.txt",
      `This is awesome:${first}${second}`,
      {flag : 'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const start = async () => {
//   try{
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first);
//     console.log(second);
//   }catch(error){
//     console.log(error);
//   }
// }

// start();

// much better than the nested callbacks...better than the file1.js
