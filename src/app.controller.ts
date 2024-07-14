import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('encrypt')
  encrypt(@Body() body: any): any {
    if (!body.data) {
      return { message: 'Nenhum dado fornecido para criptografia!' };
    }
    const encryptedData = this.appService.encrypt(JSON.stringify(body.data));
    return { message: 'Dados criptografados com sucesso!', data: encryptedData };
  }

  @Post('decrypt')
  decrypt(@Body() body: any): any {
    if (!body.data) {
      return { message: 'Nenhum dado fornecido para descriptografia!' };
    }
    try {
      const decryptedData = this.appService.decrypt(body.data);
      const parsedData = JSON.parse(decryptedData);
      return { message: 'Dados descriptografados com sucesso!', data: parsedData };
    } catch (error) {
      return { message: 'Erro ao descriptografar os dados!', error: error.message };
    }
  }
}
