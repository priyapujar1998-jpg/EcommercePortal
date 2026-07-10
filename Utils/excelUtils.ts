import fs from "fs";
import * as XLSX from "xlsx";

export function readExcelData(sheetName: string, filePath: string) {

    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found at path: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(worksheet);
}