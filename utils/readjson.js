import fs from 'fs';
export function readJson(filepath)
{
    console.log("Reading json file");
    const filecontent = fs.readFileSync(filepath,'utf-8');
    const data = JSON.parse(filecontent);
    return data;
}