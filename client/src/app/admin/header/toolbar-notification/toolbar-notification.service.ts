import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToolbarNotificationModel } from './toolbar-notification.model';

@Injectable()
export class ToolbarNotificationService {
  notifications: ToolbarNotificationModel[];

  constructor(private http: HttpClient) {
    this.notifications = [
      {
        id: '1',
        title: 'angular 6 Version update record',
        lastTime: '23 Minutes before',
        state: '1'
      },
      {
        id: '2',
        title: 'vue Heat continues to rise',
        lastTime: '23 Minutes before',
        state: 'state'
      },
      {
        id: '3',
        title: 'react 16 release',
        lastTime: '23 Minutes before',
        state: 'state'
      },
      {
        id: '4',
        title: '2018 Front-end development trend',
        lastTime: '23 Minutes before',
        state: 'state'
      },
      {
        id: '5',
        title: 'Frame construction is completed',
        lastTime: '23 Minutes before',
        state: 'state'
      }
    ];
  }

  select() {
    return this.notifications;
  }

  delete(notification) {
    const i = this.notifications.indexOf(notification);
    this.notifications = [
      ...this.notifications.slice(0, i),
      ...this.notifications.slice(i + 1)
    ];

    return this.notifications;
  }
}
