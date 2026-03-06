import { Controller, Get, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Get(':id')
  async getCrypto(@Param('id') id: string) {
    return await this.cryptoService.getCryptoData(id);
  }
}
