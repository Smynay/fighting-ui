require("dotenv").config();
console.log("Checking envs...\n");

if (!process.env.REACT_APP_HOST && !process.env.REACT_APP_PORT) {
  console.log(".env file is not configured (check README file)!");

  process.exit(1);
}
