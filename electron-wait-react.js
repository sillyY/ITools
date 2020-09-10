const net = require('net')
const chalk = require('chalk')
const port = process.env.PORT ? process.env.PORT - 100 : 3000

process.env.ELECTRON_START_URL = `http://localhost:${port}`

const log = console.log

const client = new net.Socket()

let startedElectron = false;
const tryConnection = () =>
  client.connect(
    { port: port },
    () => {
      client.end();
      if (!startedElectron) {
        log("starting electron");
        startedElectron = true;
        const exec = require("child_process").exec;
        const process = exec("npm run electron", {});
        process.stdout.on('data', (msg) => {
          log(chalk.blueBright(msg))
        })
        process.stderr.on('error', (err) => {
          log(chalk.redBright(err))
        })
      }
    }
  );

tryConnection()

client.on('error', (error) => {
  setTimeout(tryConnection, 1000)
})
