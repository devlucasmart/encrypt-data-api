import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class AppService {
  private readonly algorithm = 'aes-256-cbc';
  private readonly key = Buffer.from('01234567890123456789012345678901');
  private readonly iv = Buffer.from('0123456789012345');

  encrypt(text: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(encrypted: string): string {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
