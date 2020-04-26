const chalk = require("chalk");

export const timeLog = (logInfo: string) => {
    const nowDate = new Date();
    /* eslint-disable no-console */
    console.log(
        `[${nowDate.toLocaleString()}.${nowDate.getMilliseconds().toString().padStart(3, "0")}] ${chalk.green(logInfo)}`
    );
};
