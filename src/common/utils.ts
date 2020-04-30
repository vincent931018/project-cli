import * as chalk from "chalk";
import { TimeLog } from "../../types/global";

export const log: TimeLog = (logInfo: string) => {
    const nowDate = new Date();
    /* eslint-disable no-console */
    console.log(
        `[${nowDate.toLocaleString()}.${nowDate.getMilliseconds().toString().padStart(3, "0")}] ${chalk.green(logInfo)}`
    );
};
