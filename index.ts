const inquirer = require("inquirer");
const util = require("util");
const child_process = require("child_process");
import { fileWritePromify, fileReadPromify, fileDeletePromify } from './common/utils'

// 选项操作类型
type OptionsType = String;

// 选项操作列表
const choicesList: OptionsType[] = [
    "选项一",
    "选项二",
    "选项三",
    "选项四",
    "选项五",
    "选项六",
];
const CUSTOM_OPTION = "自定义选项";

const timeLog = (logInfo: string) => {
    const nowDate = new Date();
    console.log(
        `[${nowDate.toLocaleString()}.${nowDate
            .getMilliseconds()
            .toString()
            .padStart(3, "0")}] ${logInfo}`
    );
};

const actionsToDo = async (optionStr: string) => {
    const exec = util.promisify(child_process.exec);
    timeLog(`🤔你选择的操作 => ${optionStr}`);
    timeLog(`🤔开始操作一`);
    // 比如新增一个文件
    await fileWritePromify("./test.txt", "test");
    timeLog("😁开始操作二");
    // 比如读取一个文件
    const content: String = await fileReadPromify("./test.txt");
    console.log(`读取文件结果 => ${content}`);
    timeLog("😃开始操作三");
    // 比如删除一个文件
    await fileDeletePromify("./test.txt");
    timeLog("🤔等等...");
    await exec("echo end");
};

// 记录开始时间 以供后面计算总耗时
let startTime = 0;

/**
 * node 命令交互开始
 */
inquirer
    .prompt([{
        type: "list",
        name: "option",
        message: `请选择将选择的选项：`,
        choices: choicesList.concat(CUSTOM_OPTION)
    }]).then(({ option }: any) => {
        if (option === CUSTOM_OPTION) {
            return inquirer.prompt([
                { type: "input", name: "option", message: "输入自定义选项" },
            ]);
        }
        return { option };
    }).then(({ option }: any) => {
        startTime = Date.now();
        console.log(`你选择了选项 ===> ${option}`)
        return actionsToDo(option);
    }).then(() => {
        // end
        const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
        timeLog(`😝操作成功 总共耗时${endTime}s`);
    }).catch((err: any) => {
        console.log(err, "error o");
    });
