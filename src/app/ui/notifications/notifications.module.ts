import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { FinderNotificationsComponent } from './finder-notifications/finder-notifications.component';
import { NotificationCardsComponent } from './notification-cards/notification-cards.component';



@NgModule({
  declarations: [
    NotificationsPageComponent,
    FinderNotificationsComponent,
    NotificationCardsComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class NotificationsModule { }
