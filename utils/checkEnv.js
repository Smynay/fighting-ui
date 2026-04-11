require("dotenv").config();

const error = "\x1b[31m";
const ok = "\x1b[32m";
const reset = "\x1b[0m";

function wrapText(text, color) {
  return color + text + reset + "\n";
}

process.stdout.write("Checking envs... ");

if (!process.env.REACT_APP_HOST || !process.env.REACT_APP_SERVER_PORT) {
  process.stdout.write(wrapText("ERROR", error));
  process.stdout.write(".env file is not configured (check README file)!\n");

  process.exit(1);
}

process.stdout.write(wrapText("OK", ok));

process.exit(0);
