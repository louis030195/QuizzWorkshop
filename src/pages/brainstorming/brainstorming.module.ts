import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainstormingPage } from './brainstorming';

@NgModule({
  declarations: [
    BrainstormingPage,
  ],
  imports: [
    IonicPageModule.forChild(BrainstormingPage),
  ],
})
export class BrainstormingPageModule {}
