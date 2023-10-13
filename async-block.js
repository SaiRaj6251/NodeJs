const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    // BLOCKING CODE(NESTED FOR LOOP)
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Hey its me");
});

// our code is blocked due to some random user if that user enters the blocking code page
