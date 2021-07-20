const child_process = require("child_process");
console.log("FirstStart");
const newPrcess = child_process.spawn("node", ["fibonacci.js"], {
  stdio: "inherit",
});
console.log("SecondEnd");
