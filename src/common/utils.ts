const chalk = require("chalk");
const log = console.log;

export const timeLog = (logInfo: string) => {
    const nowDate = new Date();
    log(
        chalk.green(`[${nowDate.toLocaleString()}.${nowDate.getMilliseconds().toString().padStart(3, "0")}] ${logInfo}`)
    );
};
