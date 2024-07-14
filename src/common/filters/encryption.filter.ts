import { Injectable, 
         NestInterceptor, 
         ExecutionContext, 
         CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app.service';

@Injectable()
export class EncryptionInterceptor implements NestInterceptor {
  constructor(private readonly appService: AppService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body && request.body.data) {
      const encryptedData = this.appService.encrypt(
        JSON.stringify(request.body.data)
      );
      request.body.data = encryptedData;
    }

    return next.handle().pipe(
      map((data) => {
        if (data && data.data) {
          try {
            const decryptedData = this.appService.decrypt(data.data);
            data.data = JSON.parse(decryptedData);
          } catch (error) {
            // Handle decryption error if necessary
          }
        }
        return data;
      }),
    );
  }
}
