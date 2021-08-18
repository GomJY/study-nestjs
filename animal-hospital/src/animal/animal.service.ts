import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Animal } from './Animal';
import { promises } from 'fs';

const { readFile, writeFile } = promises;

@Injectable()
export class AnimalService {
  constructor() {
  }

  /**
   * @param animal {Animal}
   * @throws {Error} `이미 같은 ${animal.name}라는 이름이 존재합니다.`
   * @throws {Error} `저장하는데 문제가 발생하였습니다.`
   * @return {Animal[]} 저장한 animal Data
   */
  static async save( animal: Animal ): Promise<Animal[]> {
    let data: Animal[] = await this.getList();
    for(let dataAnimal of data) {
      if(animal.isSameName(dataAnimal)) {
        throw new HttpException(`이미 같은 ${animal.name}라는 이름이 존재합니다.`, HttpStatus.BAD_REQUEST);
      }
    }
    data.push(animal);
    try {
      await writeFile($dataPath, JSON.stringify(data));
    } catch (e) {
      console.error('저장하는데 문제가 발생하였습니다.', e);
      throw new HttpException(`저장하는데 문제가 발생하였습니다.`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return data;
  }

  static async getList(): Promise<Animal[]> {
    let data: Animal[] = [];
    try {
      const dataFile = await readFile($dataPath);
      data = JSON.parse(dataFile.toString()).map(v => new Animal(v));
    } catch (e) {
      console.error('dataFile을 읽어오는데 실패하였습니다.', e);
    }
    return data;
  }
}
