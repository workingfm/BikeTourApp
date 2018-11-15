import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourDetailPage } from './tour-detail';
import { TranslateModule } from '@ngx-translate/core';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    TourDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TourDetailPage),
    TranslateModule,
    NgCalendarModule
  ],
})
export class TourDetailPageModule {}
