import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileBookingDetailPage } from './user-profile-booking-detail';

@NgModule({
  declarations: [
    UserProfileBookingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileBookingDetailPage),
  ],
})
export class UserProfileBookingDetailPageModule {}
