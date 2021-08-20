import { readFile } from 'fs/promises';

export async function getData(): Promise<any> {
  let data: any[] = [];
  try {
    const dataFile = await readFile($dataPath);
    data = JSON.parse(dataFile.toString());
  } catch (e) {
    console.error('dataFile을 읽어오는데 실패하였습니다.', e);
  }
  return data;
}
