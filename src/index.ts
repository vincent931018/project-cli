import * as inquirer from "inquirer";
import * as util from "util";
import * as childProcess from "child_process";
import * as ora from "ora";
import { OptionsList, InputThenResult } from "../types/global";
import { log } from "./common/utils";

// 选项操作列表
const choicesList: OptionsList = ["选项一", "选项二", "选项三", "选项四", "选项五", "选项六"];
const CUSTOM_OPTION = "自定义选项";

const actionsToDo = async (optionStr: string): Promise<undefined> => {
    const exec = util.promisify(childProcess.exec);
    log(`🤔你选择的操作 => ${optionStr}`);
    log(`🤔开始操作一`);
    // 比如新增一个文件
    log("😁开始操作二");
    // 比如读取一个文件
    log("😃开始操作三");
    // 比如删除一个文件
    log("🤔等等...");
    await exec("echo end");
    const spinner = ora({
        text: "Loading...",
        color: "yellow"
    }).start();
    await new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 3000)
    );
    spinner.succeed("操作成功");
    return new Promise(resolve => resolve());
};

// 记录开始时间 以供后面计算总耗时
let startTime = 0;

/**
 * node 命令交互开始
 */
inquirer
    .prompt([
        {
            type: "list",
            name: "option",
            message: `请选择将选择的选项：`,
            choices: choicesList.concat(CUSTOM_OPTION)
        }
    ])
    .then(({ option }: InputThenResult) => {
        if (option === CUSTOM_OPTION) {
            return inquirer.prompt([{ type: "input", name: "option", message: "输入自定义选项" }]);
        }
        return { option };
    })
    .then(({ option }: InputThenResult) => {
        startTime = Date.now();
        return actionsToDo(option);
    })
    .then(() => {
        // end
        const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
        log(`😝操作成功 总共耗时${endTime}s`);
    })
    .catch((err: object) => {
        log(`😢 error => ${JSON.stringify(err)}`);
    });
