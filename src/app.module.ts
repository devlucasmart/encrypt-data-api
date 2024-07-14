import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptionInterceptor } from './common/filters/encryption.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'APP_INTERCEPTOR',
    useClass: EncryptionInterceptor,
  }],
})
export class AppModule {}
