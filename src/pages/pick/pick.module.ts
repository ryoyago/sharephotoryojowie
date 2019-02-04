import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickerPage } from './pick';

@NgModule({
  declarations: [
    PickerPage,
  ],
  imports: [
    IonicPageModule.forChild(PickerPage),
  ],
})
export class PickPageModule {}
