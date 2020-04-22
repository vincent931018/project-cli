export const timeLog = (logInfo: string) => {
    const nowDate = new Date();
    console.log(`[${nowDate.toLocaleString()}.${nowDate.getMilliseconds().toString().padStart(3, "0")}] ${logInfo}`);
};
