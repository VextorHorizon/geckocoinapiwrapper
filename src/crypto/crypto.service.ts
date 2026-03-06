import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CryptoService {
  constructor(private readonly httpService: HttpService) {}

  async getCryptoData(id: string) {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${id}`;
      const { data } = await firstValueFrom(this.httpService.get(url));
      
      return {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        current_price_usd: data.market_data.current_price.usd,
        market_cap_usd: data.market_data.market_cap.usd,
        total_volume_usd: data.market_data.total_volume.usd,
        price_change_24h_usd: data.market_data.price_change_24h,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        last_updated: data.last_updated,
      };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new HttpException('Cryptocurrency not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error fetching data from CoinGecko',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
