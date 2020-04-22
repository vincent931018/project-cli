const fs = require('fs');

/**
 * 文件读操作 promise 化
 * @param filePath
 */
export const fileReadPromify: Function = (filePath: String): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, result) => {
            if(err){
                reject(err);
            }
            // 返回文件内容
            resolve(result.toString());
        })
    })
}

/**
 * 文件写操作 promise 化
 * @param filePath
 * @param content
 */
export const fileWritePromify: Function = (filePath: String, content: String): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, err => {
            if(err){
                reject(err);
            }
            // 返回文件路径
            resolve(filePath);
        })
    })
}

/**
 * 文件删除操作 promise 化
 * @param filePath
 */
export const fileDeletePromify: Function = (filePath: String): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, err => {
            if(err){
                reject(err);
            }
            resolve(true);
        })
    })
}