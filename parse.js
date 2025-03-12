import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';

const parse = (filepath) => {
    //определить текущую папку, передан относительный или абсолютный путь - и сделать абсолютный, по нему потом брать файл и парсить
    const currentWorkingDirectory = cwd();

    const file = readFileSync(filepath);
    const parsedFile = JSON.parse(file);
    console.log(`Current working directory is ${currentWorkingDirectory}`);

    return parsedFile;
}

export default parse;
