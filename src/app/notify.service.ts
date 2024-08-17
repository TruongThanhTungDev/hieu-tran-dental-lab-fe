import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  success(message: any): void {
    this.notification.success('Thành công', message);
  }

  error(message: any): void {
    this.notification.error('Lỗi', message);
  }

  info(message: any): void {
    this.notification.info('Info', message);
  }

  warning(message: any): void {
    this.notification.warning('Warning', message);
  }
}
