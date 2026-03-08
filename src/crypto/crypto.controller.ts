import { Controller, Get, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto') // ก็คือ /crypto
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {} //กำหนด object ให้ CryptoService ชื่อ cryptoService จาก Service(./crypto.service) เพื่อที่จะเอามาใช้ใน Controller ได้

  @Get(':id') // id ก้คือ input ที่เราจะรับ? ตัวอย่างก้ localhost:3000/crypto/bitcoin
  async getCrypto(@Param('id') id: string) { 
    return await this.cryptoService.getCryptoData(id); //await ตามนิยามมันคือ "is a keyword used to pause the execution of an asynchronous function until a Promise is settled"
  }
}

// this ก็คือเป็น concept ของ oop ที่ใช้บอกว่า "นี่คือตัวเอง"(cryptoSevice) ใช้ฟังก์ชั่น getCryptoData() ไปดูใน crypto.service.ts นะ